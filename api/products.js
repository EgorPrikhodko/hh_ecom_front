export const fetchProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          title: "Смарт-часы X100",
          price: 7490,
          category: "Гаджеты",
          image: "https://images.unsplash.com/photo-1617043983671-adaadcaa2460?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          description: "Водонепроницаемые, GPS, 7-дневный аккумулятор"
        },
        {
          id: 2,
          title: "Беспроводные наушники Pro",
          price: 5490,
          category: "Аудио",
          image: "https://images.unsplash.com/photo-1629429407756-4a7703614972?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          description: "Шумоподавление, 30 часов работы"
        },
        {
          id: 3,
          title: "Игровая мышь GX",
          price: 2990,
          category: "Компьютеры",
          image: "https://images.unsplash.com/photo-1629429408209-1f912961dbd8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          description: "RGB-подсветка, 16000 DPI"
        }
      ]);
    }, 500);
  });
};