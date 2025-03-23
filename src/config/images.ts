interface ImageCategory {
  [key: string]: string;
}

interface ImageConfig {
  projects: ImageCategory;
  profile: ImageCategory;
  backgrounds: ImageCategory;
  testimonials: ImageCategory;
}

export const images: ImageConfig = {
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
    fileShare: "https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg"
  },
  profile: {
    avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
    hero: "https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg"
  },
  backgrounds: {
    hero: "https://images.pexels.com/photos/7130560/pexels-photo-7130560.jpeg",
    about: "https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg",
    contact: "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg"
  },
  testimonials: {
    client1: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
    client2: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
    client3: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
    client4: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg",
    client5: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg",
    client6: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg"
  }
};

// Fallback images for each category
const fallbackImages = {
  projects: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg",
  profile: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
  backgrounds: "https://images.pexels.com/photos/7130560/pexels-photo-7130560.jpeg",
  testimonials: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
};

/**
 * Get image URL with error handling and fallback
 * @param category - The category of the image
 * @param key - The specific image key
 * @returns The image URL or a fallback image
 */
export const getImageUrl = (category: keyof ImageConfig, key: string): string => {
  try {
    // Check if category exists
    if (!images[category]) {
      console.warn(`Image category '${category}' not found. Using fallback image.`);
      return fallbackImages[category] || fallbackImages.projects;
    }

    // Check if image exists in category
    const imageUrl = images[category][key];
    if (!imageUrl) {
      console.warn(`Image '${key}' not found in category '${category}'. Using category fallback.`);
      return fallbackImages[category];
    }

    return imageUrl;
  } catch (error) {
    console.error('Error getting image URL:', error);
    return fallbackImages.projects; // Default fallback
  }
};

/**
 * Check if an image URL is valid
 * @param url - The image URL to check
 * @returns Promise that resolves to boolean
 */
export const isImageValid = async (url: string): Promise<boolean> => {
  try {
    const response = await fetch(url, { method: 'HEAD' });
    return response.ok;
  } catch (error) {
    console.error('Error checking image URL:', error);
    return false;
  }
}; 