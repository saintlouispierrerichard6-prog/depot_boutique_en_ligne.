
export type Product = {

    id : number;
    nom :string;
    prix : number;
    image : string;
    description : string;
    variantes : string[];
};

export const products: Product[] =[

      { id : 1,
        nom : "Pull Élégance Femme",
        prix : 49.99,
        image : "/images/maillotfille.jpg",
        description :"Pull tricoté chic et confortable, parfait pour les journées fraîches avec un style moderne et raffiné.",
        variantes : ["S", "M", "L", "XL"],

      },

   {
    id : 2,
    nom : "Palette Glam Beauty",
    prix : 29.99,
    image : "/images/maquillage1.jpg",
    description : "Palette de maquillage avec plusieurs teintes lumineuses pour créer un look naturel ou glamour.",
    variantes : ["Naturel", "Glamour", "Soirée"],
  },

  {
    id : 3,
    nom : "Poudre Naturelle Premium",
    prix : 24.99,
    image : "/images/maquillage2.jpg",
    description : "Poudre légère et douce pour une finition impeccable qui met en valeur la beauté naturelle.",
    variantes : ["Claire", "Moyenne", "Foncée"],
  },

  {
    id : 4,
    nom : "Veste Homme Prestige",
    prix : 89.99,
    image : "/images/vestehomme.jpg",
    description : "Veste élégante pour homme avec une coupe moderne, idéale pour les occasions spéciales.",
    variantes : ["M", "L", "XL"],
  },

  {
    id : 5,
    nom : "Robe Royale Tradition",
    prix : 119.99,
    image : "/images/vetementfilleindienne.jpg",
    description : "Robe traditionnelle raffinée avec des détails luxueux pour un style unique et remarquable.",
    variantes : ["Rouge", "Or", "Noir"],
  },

];