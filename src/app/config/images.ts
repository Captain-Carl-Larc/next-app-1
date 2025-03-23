export const images = {
  projects: {
    ecommerce: "https://images.pexels.com/photos/34577/pexels-photo.jpg",
    taskManager: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg",
    portfolio: "https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg",
    weather: "https://images.pexels.com/photos/2448749/pexels-photo-2448749.jpeg",
    chat: "https://images.pexels.com/photos/4126743/pexels-photo-4126743.jpeg",
    recipe: "https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg",
    fitness: "https://images.pexels.com/photos/2294361/pexels-photo-2294361.jpeg",
    notes: "https://images.pexels.com/photos/733852/pexels-photo-733852.jpeg",
    dashboard: "https://images.pexels.com/photos/7376/startup-photos.jpg",
    fileShare: "https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg",
    smarthome: "https://images.pexels.com/photos/1034808/pexels-photo-1034808.jpeg"
  }
};

export const getImageUrl = (category: keyof typeof images, key: string): string => {
  return images[category]?.[key] || '';
};

export const isImageValid = async (url: string): Promise<boolean> => {
  try {
    const response = await fetch(url, { method: 'HEAD' });
    return response.ok;
  } catch {
    return false;
  }
}; 