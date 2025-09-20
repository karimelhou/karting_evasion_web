import React from 'react';
import path from 'path';
import { promises as fs } from 'fs';
import { compileMDX } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';
import type { Locale } from './i18n';
import { defaultLocale } from './i18n';

export type MDXDocument<TFrontmatter> = {
  slug: string;
  frontmatter: TFrontmatter & { locale?: Locale; title?: string; excerpt?: string };
  content: React.ReactNode;
};

const contentRoot = path.join(process.cwd(), 'content');

export async function getMDXDocuments<TFrontmatter = Record<string, unknown>>(
  collection: string,
  locale: Locale
): Promise<MDXDocument<TFrontmatter>[]> {
  const dir = path.join(contentRoot, collection);
  const entries = await fs.readdir(dir);
  const docs: MDXDocument<TFrontmatter>[] = [];
  const fallbacks: MDXDocument<TFrontmatter>[] = [];
  for (const file of entries) {
    if (!file.endsWith('.mdx')) continue;
    const slug = file.replace(/\.mdx$/, '');
    const source = await fs.readFile(path.join(dir, file), 'utf8');
    const { frontmatter, content } = await compileMDX<{ locale?: Locale }>({
      source,
      options: {
        parseFrontmatter: true,
        mdxOptions: {
          remarkPlugins: [remarkGfm]
        }
      }
    });
    const docLocale = (frontmatter.locale ?? defaultLocale) as Locale;
    const doc = { slug, frontmatter: frontmatter as any, content };
    if (docLocale === locale) {
      docs.push(doc);
    } else if (docLocale === defaultLocale) {
      fallbacks.push(doc);
    }
  }
  if (docs.length > 0) {
    return docs.sort((a, b) => a.slug.localeCompare(b.slug));
  }
  return fallbacks.sort((a, b) => a.slug.localeCompare(b.slug));
}

export async function getMDXDocument<TFrontmatter>(collection: string, slug: string) {
  const file = path.join(contentRoot, collection, `${slug}.mdx`);
  const source = await fs.readFile(file, 'utf8');
  return compileMDX<TFrontmatter>({
    source,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        remarkPlugins: [remarkGfm]
      }
    }
  });
}
