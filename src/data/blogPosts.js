const blogPosts = [
  {
    id: 1,
    slug: "react-useeffect-notlarim",
    title: "React useEffect Hakkında Notlarım",
    date: "2025-04-23",
    summary: "React'te useEffect hook'u ne işe yarar? Ne zaman tetiklenir? Kendi öğrenme sürecimden notlar.",
    content: `
      ## useEffect Nedir?
      useEffect, React bileşeni render olduktan sonra belirli işlemleri yapmak için kullanılan bir hook'tur.
      \n\n
      ## Ne Zaman Kullanılır?
      - Veri çekme işlemleri
      - DOM güncellemeleri sonrası side effect
      - Timer, event listener gibi temizleme işlemleri
    `
  },
  {
    id: 2,
    slug: "css-flexbox-grid-farki",
    title: "Flexbox mı Grid mi? Ne Zaman Hangisi?",
    date: "2025-04-18",
    summary: "CSS’te layout oluştururken Flexbox ve Grid sistemlerinin farkları nedir?",
    content: `
      ## Flexbox vs Grid
      Flexbox tek boyutlu düzen için kullanılır, Grid ise iki boyutlu.
      \n\n
      Flex: Yalnızca satır ya da sütun
      Grid: Satır + sütun düzeni bir arada
    `
  }
];

export default blogPosts;

  