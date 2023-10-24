enum Author {
  DaikiOkayama = "Daiki Okayama",
  AkiyukiKoyama = "Akiyuki Koyama",
  IzakiToshinari = "Izaki Toshinari",
}

type ArticleMetadataType = {
  path: string;
  author: Author | Author[];
  title: string;
  date: Date;
};

const ArticlesMetadata: ArticleMetadataType[] = [
  {
    path: "Python-for-Beginners/01_What-is-Object",
    author: Author.DaikiOkayama,
    title: "Pythonのオブジェクト",
    date: new Date("2023-10-25"),
  },
  {
    path: "Introduction-to-Google-Colaboratory",
    author: [Author.DaikiOkayama],
    title: "Google Colaboratory入門",
    date: new Date("2023-10-25"),
  },
  {
    path: "Available-Markdown-Notation",
    author: [Author.DaikiOkayama],
    title: "ブログで利用可能なMarkdown記法",
    date: new Date("2023-10-24"),
  },
];

export default ArticlesMetadata;
export type { ArticleMetadataType };
