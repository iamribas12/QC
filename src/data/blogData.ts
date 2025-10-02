import blogHistory from "@/assets/blog-history.jpg";
import blogThuluth from "@/assets/blog-thuluth.jpg";
import blogTools from "@/assets/blog-tools.jpg";
import blogGeometry from "@/assets/blog-geometry.jpg";
import blogContemporary from "@/assets/blog-contemporary.jpg";
import blogSpiritual from "@/assets/blog-spiritual.jpg";

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  content: {
    introduction: string;
    sections: {
      heading: string;
      text: string;
    }[];
    conclusion: string;
  };
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "The History of Arabic Calligraphy",
    excerpt: "Explore the rich heritage and evolution of Arabic calligraphic art through the centuries, from its origins to modern interpretations.",
    date: "2025-01-15",
    readTime: "5 min read",
    category: "History",
    image: blogHistory,
    content: {
      introduction: "Arabic calligraphy is more than just beautiful writing—it's a sacred art form that has evolved over 1,400 years. From the earliest Quranic manuscripts to contemporary artistic expressions, this visual language has captivated hearts and minds across cultures.",
      sections: [
        {
          heading: "The Origins: 7th Century",
          text: "Arabic calligraphy emerged alongside the revelation of the Quran in the 7th century. The need to preserve the divine text with utmost beauty and accuracy led to the development of various scripts. The earliest forms, such as Kufic script, were angular and geometric, reflecting the architectural aesthetics of early Islamic civilization."
        },
        {
          heading: "The Golden Age: 8th-13th Centuries",
          text: "During the Abbasid Caliphate, calligraphy reached new heights of sophistication. Master calligraphers like Ibn Muqla (886-940 CE) standardized proportions and established rules that would govern the art for centuries. Six classical scripts emerged: Thuluth, Naskh, Muhaqqaq, Rayhani, Tawqi, and Riqa."
        },
        {
          heading: "Regional Variations",
          text: "As Islam spread across continents, regional styles developed. Persian calligraphers refined the Nastaliq script, creating flowing, diagonal compositions. Ottoman masters elevated Diwani script to royal status. In North Africa, Maghrebi script developed its distinctive rounded forms."
        },
        {
          heading: "Modern Renaissance",
          text: "The 20th and 21st centuries have witnessed a renaissance in Arabic calligraphy. Contemporary artists blend traditional techniques with modern aesthetics, creating works that bridge heritage and innovation. Digital tools now complement traditional methods, expanding creative possibilities."
        }
      ],
      conclusion: "Understanding the history of Arabic calligraphy enriches our appreciation of this timeless art form. Each stroke carries centuries of tradition, spiritual devotion, and artistic excellence—a legacy that continues to inspire artists and admirers worldwide."
    }
  },
  {
    id: 2,
    title: "Mastering Thuluth Script",
    excerpt: "A comprehensive guide to understanding and practicing one of the most elegant Arabic calligraphy styles.",
    date: "2025-01-10",
    readTime: "8 min read",
    category: "Tutorial",
    image: blogThuluth,
    content: {
      introduction: "Thuluth, meaning 'one third' in Arabic, is renowned for its majestic curves and pronounced verticals. This script has adorned mosques, manuscripts, and architectural masterpieces for over a thousand years. Learning Thuluth is a journey that requires patience, dedication, and understanding of its fundamental principles.",
      sections: [
        {
          heading: "Understanding the Basics",
          text: "Thuluth is characterized by its large, elegant letters and intricate ligatures. The script gets its name from the way letters are proportioned—approximately one-third of each letter is straight and two-thirds curved. The baseline is dynamic, with letters ascending and descending in rhythmic patterns."
        },
        {
          heading: "Essential Tools",
          text: "To practice Thuluth, you'll need a qalam (reed pen) cut at an angle, high-quality ink, and smooth paper. The qalam's width determines the size of your work—traditionally measured in dots. A standard Thuluth pen creates letters that are 6-8 dots in height for alif (the first letter)."
        },
        {
          heading: "Letter Formation",
          text: "Begin with the basic letters: alif, ba, ta, tha. Each letter has specific rules for angles, curves, and proportions. The alif must be perfectly vertical, serving as the reference for all other letters. Practice individual letters repeatedly before attempting words and phrases."
        },
        {
          heading: "Composition and Layout",
          text: "Thuluth excels in monumental inscriptions and decorative panels. Master calligraphers spend years learning to balance positive and negative space, creating harmonious compositions. Study historical examples from mosques and manuscripts to understand layout principles."
        },
        {
          heading: "Common Challenges",
          text: "Many beginners struggle with maintaining consistent angles and achieving smooth curves. The key is patience and regular practice. Start with 15-20 minutes daily, focusing on one or two letters. Use guidelines initially, gradually developing the muscle memory to write freehand."
        }
      ],
      conclusion: "Mastering Thuluth is a lifelong journey that rewards dedication with unparalleled beauty. Remember that even master calligraphers continue learning and refining their skills. Embrace the process, celebrate small victories, and let each practice session deepen your connection to this magnificent art form."
    }
  },
  {
    id: 3,
    title: "Tools of the Trade: Traditional vs Modern",
    excerpt: "Discover the essential tools used by calligraphers and how technology is shaping the art form today.",
    date: "2025-01-05",
    readTime: "6 min read",
    category: "Resources",
    image: blogTools,
    content: {
      introduction: "The tools of Arabic calligraphy have evolved over centuries, yet the fundamental principles remain unchanged. Today's calligraphers bridge tradition and innovation, using both time-honored instruments and cutting-edge technology to create breathtaking works.",
      sections: [
        {
          heading: "Traditional Tools",
          text: "The qalam (reed pen) remains the heart of traditional calligraphy. Cut from dried reed or bamboo, each pen is handcrafted to the calligrapher's specifications. Natural inks, often made from lampblack and gum arabic, provide rich, deep colors. Paper must be smooth and properly sized—historically, calligraphers prepared their own surfaces."
        },
        {
          heading: "The Art of Pen Cutting",
          text: "Cutting a qalam is a skill in itself. The angle, width, and sharpness of the nib determine the character of your writing. Most scripts require an oblique cut at 45-70 degrees. Master calligraphers maintain multiple pens for different scripts and sizes, each cut and maintained with meticulous care."
        },
        {
          heading: "Modern Adaptations",
          text: "Today's calligraphers have access to manufactured pens with consistent widths, archival inks in various colors, and specially formulated papers. These tools make calligraphy more accessible to beginners while maintaining quality. Parallel pens and markers allow for immediate practice without the learning curve of traditional pen cutting."
        },
        {
          heading: "Digital Revolution",
          text: "Digital tablets and styluses now enable calligraphers to work in vector formats, creating scalable artwork. Software like Adobe Illustrator and Procreate support custom brushes that mimic traditional tools. Some artists scan hand-drawn work and refine it digitally, combining the authenticity of handwork with digital precision."
        },
        {
          heading: "Hybrid Approach",
          text: "Many contemporary calligraphers adopt a hybrid workflow: sketching with traditional tools, refining digitally, and sometimes returning to traditional methods for final execution. This approach offers the best of both worlds—the soul of handcraft and the flexibility of digital media."
        }
      ],
      conclusion: "Whether you prefer the meditative practice of traditional tools or the versatility of digital platforms, both paths lead to beautiful calligraphy. The choice isn't between old and new—it's about finding the tools that best express your artistic vision while honoring the art form's rich heritage."
    }
  },
  {
    id: 4,
    title: "Islamic Geometry in Calligraphy",
    excerpt: "Understanding the mathematical beauty and spiritual significance of geometric patterns in Islamic art.",
    date: "2024-12-28",
    readTime: "7 min read",
    category: "Art & Design",
    image: blogGeometry,
    content: {
      introduction: "Islamic geometry and calligraphy are inseparable companions in the visual language of Islamic art. Together, they create compositions that reflect divine order, mathematical precision, and spiritual harmony. Understanding this relationship deepens our appreciation of both art forms.",
      sections: [
        {
          heading: "The Mathematical Foundation",
          text: "Islamic geometric patterns are based on precise mathematical principles—circles, squares, and their divisions into intricate tessellations. These patterns represent the infinite nature of creation and the underlying order of the universe. Calligraphy, too, follows mathematical proportions, with letter heights and curves determined by specific ratios."
        },
        {
          heading: "Sacred Proportions",
          text: "The dot system developed by Ibn Muqla uses the diamond-shaped dot created by the qalam as the basic unit of measurement. All letters are proportioned in relation to this dot—typically, the alif is 5-7 dots tall depending on the script. This system ensures harmony and balance in calligraphic compositions."
        },
        {
          heading: "Geometric Frames",
          text: "Calligraphic inscriptions are often enclosed within geometric borders—circles, squares, or polygons. The challenge is to fit text within these shapes while maintaining legibility and beauty. Master calligraphers achieve this through strategic ligatures, elongations, and compressions that create visual equilibrium."
        },
        {
          heading: "Circular Compositions",
          text: "Circular calligraphy (tughra or hilya) requires special skill. Text follows the curve while maintaining proper letter forms and proportions. These circular compositions often appear on dome interiors, where they can be viewed from below, creating a heavenward visual journey."
        },
        {
          heading: "Pattern and Negative Space",
          text: "In Islamic art, negative space is as important as positive form. Geometric patterns provide breathing room for calligraphic elements, while calligraphy adds meaning to abstract geometry. The interplay creates multilayered compositions that reward extended contemplation."
        }
      ],
      conclusion: "The fusion of geometry and calligraphy in Islamic art represents a unique achievement in world culture—where mathematics, spirituality, and aesthetics converge. Studying these principles enhances both our technical skills and spiritual appreciation of this profound artistic tradition."
    }
  },
  {
    id: 5,
    title: "Contemporary Arabic Calligraphy Artists",
    excerpt: "Meet the modern masters who are pushing the boundaries of traditional calligraphic art.",
    date: "2024-12-20",
    readTime: "10 min read",
    category: "Artists",
    image: blogContemporary,
    content: {
      introduction: "Contemporary Arabic calligraphy is experiencing a vibrant renaissance. Artists worldwide are reimagining this ancient art form, creating works that honor tradition while embracing innovation. These modern masters bridge cultures and generations, making calligraphy relevant to contemporary audiences.",
      sections: [
        {
          heading: "Hassan Massoudy: Poetry in Motion",
          text: "Iraqi-French calligrapher Hassan Massoudy has revolutionized Arabic calligraphy by integrating it with abstract expressionism. His large-scale works feature flowing, dynamic compositions that capture the energy of words. Massoudy often pairs classical Arabic poetry with gestural brushwork, creating pieces that are both readable and purely visual."
        },
        {
          heading: "eL Seed: Street Calligraphy",
          text: "Tunisian-French artist eL Seed has brought Arabic calligraphy to urban spaces worldwide. His monumental murals transform buildings and neighborhoods, using calligraphy to address social issues and promote cultural dialogue. His piece 'Perception' in Cairo's Manshiyat Naser covered 50 buildings, visible only from a nearby mountain—a comment on perspective and judgment."
        },
        {
          heading: "Farhad Nargol-O'Neill: Fusion Master",
          text: "British-Iranian artist Farhad Nargol-O'Neill creates mixed-media works that fuse calligraphy with contemporary art techniques. His pieces often incorporate gold leaf, acrylics, and traditional pigments on canvas, creating textured, luminous surfaces that honor Islamic artistic traditions while speaking a contemporary visual language."
        },
        {
          heading: "Lara Assouad: Minimalist Modernist",
          text: "Lebanese calligrapher Lara Assouad is known for her minimalist approach, stripping calligraphy to its essential forms. Her work explores the boundaries between readability and pure form, creating compositions that function as both text and abstract art. She frequently collaborates with fashion brands and interior designers."
        },
        {
          heading: "Wissam Shawkat: The Digitalist",
          text: "Iraqi calligrapher Wissam Shawkat seamlessly blends traditional techniques with digital tools. His work ranges from classical compositions to experimental designs that explore the possibilities of digital calligraphy. He's also an educator, teaching workshops worldwide and sharing his methods online."
        }
      ],
      conclusion: "These artists represent just a fraction of the vibrant contemporary calligraphy scene. Their work demonstrates that Arabic calligraphy is not a static tradition but a living, evolving art form. By respecting its rules while questioning its boundaries, they ensure calligraphy remains relevant and inspiring for future generations."
    }
  },
  {
    id: 6,
    title: "The Spiritual Dimension of Calligraphy",
    excerpt: "Exploring how calligraphy serves as a meditative practice and spiritual expression in Islamic culture.",
    date: "2024-12-15",
    readTime: "6 min read",
    category: "Spirituality",
    image: blogSpiritual,
    content: {
      introduction: "For practitioners of Arabic calligraphy, the art transcends mere aesthetics—it is a spiritual discipline, a form of worship, and a meditative practice. Understanding this dimension reveals why calligraphy has remained central to Islamic culture for over fourteen centuries.",
      sections: [
        {
          heading: "Calligraphy as Worship",
          text: "In Islamic tradition, beautifying the words of the Quran through calligraphy is considered an act of devotion. Historically, the most skilled calligraphers dedicated their lives to copying sacred texts. Each stroke was made with mindful intention, transforming the physical act of writing into spiritual practice."
        },
        {
          heading: "The Meditative Practice",
          text: "Creating calligraphy requires complete presence and focus. The rhythmic motion of forming letters, the conscious control of breath, and the stillness of mind mirror meditation practices. Many calligraphers describe entering a flow state where time disappears and only the present moment exists."
        },
        {
          heading: "Sacred Phrases and Names",
          text: "Common calligraphic subjects include the 99 Names of Allah, Quranic verses, and prophetic traditions. Writing these sacred texts is believed to bring blessings (barakah) to both creator and viewer. Many Muslims display calligraphic art in their homes as daily reminders of faith and sources of spiritual reflection."
        },
        {
          heading: "The Path of Mastery",
          text: "Traditional calligraphy training involved years of discipleship under a master. This relationship went beyond technical instruction—it included spiritual guidance and character development. Humility, patience, and dedication were cultivated alongside technical skills, reflecting the Sufi understanding that outer art reflects inner state."
        },
        {
          heading: "Contemporary Spiritual Practice",
          text: "Today, people of all backgrounds discover the meditative benefits of calligraphy. Even without understanding Arabic, practitioners report that the focused attention and aesthetic beauty provide stress relief and spiritual nourishment. Calligraphy workshops often incorporate mindfulness techniques, making the practice accessible to seekers of all traditions."
        }
      ],
      conclusion: "Arabic calligraphy offers a unique path where art, spirituality, and meditation converge. Whether approached as religious devotion or secular mindfulness practice, calligraphy provides a way to slow down, focus inward, and create beauty. In our fast-paced world, this ancient practice offers timeless wisdom about the connection between hand, heart, and spirit."
    }
  }
];
