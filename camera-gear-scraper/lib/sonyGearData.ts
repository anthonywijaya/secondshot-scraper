export interface SonyGear {
  name: string;
  type: 'body' | 'lens';
  brand: 'Sony' | 'Sigma' | 'Tamron';
  mountType: 'E-mount';
  releaseYear: number;
  format?: 'Full-frame' | 'APS-C';
}

export const sonyGearDatabase: SonyGear[] = [
  // Sony Full-frame Camera Bodies (E-mount)
  { name: "Sony A1", type: "body", brand: "Sony", mountType: "E-mount", releaseYear: 2021 },
  { name: "Sony A7R V", type: "body", brand: "Sony", mountType: "E-mount", releaseYear: 2022 },
  { name: "Sony A7R IV", type: "body", brand: "Sony", mountType: "E-mount", releaseYear: 2019 },
  { name: "Sony A7 IV", type: "body", brand: "Sony", mountType: "E-mount", releaseYear: 2021 },
  { name: "Sony A7S III", type: "body", brand: "Sony", mountType: "E-mount", releaseYear: 2020 },
  { name: "Sony A7C II", type: "body", brand: "Sony", mountType: "E-mount", releaseYear: 2023 },
  { name: "Sony A7C", type: "body", brand: "Sony", mountType: "E-mount", releaseYear: 2020 },
  { name: "Sony A9 II", type: "body", brand: "Sony", mountType: "E-mount", releaseYear: 2019 },
  { name: "Sony A7R III", type: "body", brand: "Sony", mountType: "E-mount", releaseYear: 2017 },
  { name: "Sony A7 III", type: "body", brand: "Sony", mountType: "E-mount", releaseYear: 2018 },
  { name: "Sony A9", type: "body", brand: "Sony", mountType: "E-mount", releaseYear: 2017 },

  // Sony APS-C Camera Bodies (E-mount)
  { name: "Sony A6700", type: "body", brand: "Sony", mountType: "E-mount", releaseYear: 2023 },
  { name: "Sony A6600", type: "body", brand: "Sony", mountType: "E-mount", releaseYear: 2019 },
  { name: "Sony A6400", type: "body", brand: "Sony", mountType: "E-mount", releaseYear: 2019 },
  { name: "Sony A6100", type: "body", brand: "Sony", mountType: "E-mount", releaseYear: 2019 },
  { name: "Sony ZV-E10", type: "body", brand: "Sony", mountType: "E-mount", releaseYear: 2021 },

  // Sony Full-frame Lenses (E-mount)
  { name: "Sony FE 12-24mm f/2.8 GM", type: "lens", brand: "Sony", mountType: "E-mount", releaseYear: 2020, format: "Full-frame" },
  { name: "Sony FE 14mm f/1.8 GM", type: "lens", brand: "Sony", mountType: "E-mount", releaseYear: 2021, format: "Full-frame" },
  { name: "Sony FE 16-35mm f/2.8 GM", type: "lens", brand: "Sony", mountType: "E-mount", releaseYear: 2017, format: "Full-frame" },
  { name: "Sony FE 16-35mm f/2.8 GM II", type: "lens", brand: "Sony", mountType: "E-mount", releaseYear: 2024, format: "Full-frame" },
  { name: "Sony FE 16-35mm f/4 ZA OSS", type: "lens", brand: "Sony", mountType: "E-mount", releaseYear: 2014, format: "Full-frame" },
  { name: "Sony FE 20mm f/1.8 G", type: "lens", brand: "Sony", mountType: "E-mount", releaseYear: 2020, format: "Full-frame" },
  { name: "Sony FE 20-70mm f/4 G", type: "lens", brand: "Sony", mountType: "E-mount", releaseYear: 2023, format: "Full-frame" },
  { name: "Sony FE 24mm f/1.4 GM", type: "lens", brand: "Sony", mountType: "E-mount", releaseYear: 2018, format: "Full-frame" },
  { name: "Sony FE 24-70mm f/2.8 GM", type: "lens", brand: "Sony", mountType: "E-mount", releaseYear: 2016, format: "Full-frame" },
  { name: "Sony FE 24-70mm f/2.8 GM II", type: "lens", brand: "Sony", mountType: "E-mount", releaseYear: 2022, format: "Full-frame" },
  { name: "Sony FE 24-105mm f/4 G OSS", type: "lens", brand: "Sony", mountType: "E-mount", releaseYear: 2017, format: "Full-frame" },
  { name: "Sony FE 35mm f/1.4 GM", type: "lens", brand: "Sony", mountType: "E-mount", releaseYear: 2021, format: "Full-frame" },
  { name: "Sony FE 50mm f/1.2 GM", type: "lens", brand: "Sony", mountType: "E-mount", releaseYear: 2021, format: "Full-frame" },
  { name: "Sony FE 50mm f/1.4 GM", type: "lens", brand: "Sony", mountType: "E-mount", releaseYear: 2023, format: "Full-frame" },
  { name: "Sony FE 70-200mm f/2.8 GM OSS II", type: "lens", brand: "Sony", mountType: "E-mount", releaseYear: 2021, format: "Full-frame" },
  { name: "Sony FE 70-200mm f/4 G OSS", type: "lens", brand: "Sony", mountType: "E-mount", releaseYear: 2014, format: "Full-frame" },
  { name: "Sony FE 70-200mm f/4 G OSS II", type: "lens", brand: "Sony", mountType: "E-mount", releaseYear: 2024, format: "Full-frame" },
  { name: "Sony FE 85mm f/1.4 GM", type: "lens", brand: "Sony", mountType: "E-mount", releaseYear: 2016, format: "Full-frame" },
  { name: "Sony FE 90mm f/2.8 Macro G OSS", type: "lens", brand: "Sony", mountType: "E-mount", releaseYear: 2015, format: "Full-frame" },
  { name: "Sony FE 100-400mm f/4.5-5.6 GM OSS", type: "lens", brand: "Sony", mountType: "E-mount", releaseYear: 2017, format: "Full-frame" },
  { name: "Sony FE 200-600mm f/5.6-6.3 G OSS", type: "lens", brand: "Sony", mountType: "E-mount", releaseYear: 2019, format: "Full-frame" },
  { name: "Sony FE 400mm f/2.8 GM OSS", type: "lens", brand: "Sony", mountType: "E-mount", releaseYear: 2018, format: "Full-frame" },
  { name: "Sony FE 600mm f/4 GM OSS", type: "lens", brand: "Sony", mountType: "E-mount", releaseYear: 2019, format: "Full-frame" },

  // Sony APS-C Lenses (E-mount)
  { name: "Sony E 10-18mm f/4 OSS", type: "lens", brand: "Sony", mountType: "E-mount", releaseYear: 2012, format: "APS-C" },
  { name: "Sony E 10-20mm f/4 PZ G", type: "lens", brand: "Sony", mountType: "E-mount", releaseYear: 2022, format: "APS-C" },
  { name: "Sony E 11mm f/1.8", type: "lens", brand: "Sony", mountType: "E-mount", releaseYear: 2022, format: "APS-C" },
  { name: "Sony E 15mm f/1.4 G", type: "lens", brand: "Sony", mountType: "E-mount", releaseYear: 2022, format: "APS-C" },
  { name: "Sony E 16-55mm f/2.8 G", type: "lens", brand: "Sony", mountType: "E-mount", releaseYear: 2019, format: "APS-C" },
  { name: "Sony E 18-135mm f/3.5-5.6 OSS", type: "lens", brand: "Sony", mountType: "E-mount", releaseYear: 2018, format: "APS-C" },
  { name: "Sony E 30mm f/3.5 Macro", type: "lens", brand: "Sony", mountType: "E-mount", releaseYear: 2011, format: "APS-C" },
  { name: "Sony E 35mm f/1.8 OSS", type: "lens", brand: "Sony", mountType: "E-mount", releaseYear: 2013, format: "APS-C" },
  { name: "Sony E 50mm f/1.8 OSS", type: "lens", brand: "Sony", mountType: "E-mount", releaseYear: 2011, format: "APS-C" },
  { name: "Sony E 55-210mm f/4.5-6.3 OSS", type: "lens", brand: "Sony", mountType: "E-mount", releaseYear: 2011, format: "APS-C" },
  { name: "Sony E 70-350mm f/4.5-6.3 G OSS", type: "lens", brand: "Sony", mountType: "E-mount", releaseYear: 2019, format: "APS-C" },

  // Sigma Lenses for Sony E-mount
  { name: "Sigma 14-24mm f/2.8 DG DN Art", type: "lens", brand: "Sigma", mountType: "E-mount", releaseYear: 2019, format: "Full-frame" },
  { name: "Sigma 24-70mm f/2.8 DG DN Art", type: "lens", brand: "Sigma", mountType: "E-mount", releaseYear: 2019, format: "Full-frame" },
  { name: "Sigma 24-70mm f/2.8 DG DN Art II", type: "lens", brand: "Sigma", mountType: "E-mount", releaseYear: 2024, format: "Full-frame" },
  { name: "Sigma 28-70mm f/2.8 DG DN Contemporary", type: "lens", brand: "Sigma", mountType: "E-mount", releaseYear: 2021, format: "Full-frame" },
  { name: "Sigma 35mm f/1.2 DG DN Art", type: "lens", brand: "Sigma", mountType: "E-mount", releaseYear: 2019, format: "Full-frame" },
  { name: "Sigma 35mm f/1.4 DG DN Art", type: "lens", brand: "Sigma", mountType: "E-mount", releaseYear: 2021, format: "Full-frame" },
  { name: "Sigma 45mm f/2.8 DG DN Contemporary", type: "lens", brand: "Sigma", mountType: "E-mount", releaseYear: 2019, format: "Full-frame" },
  { name: "Sigma 50mm f/1.4 DG DN Art", type: "lens", brand: "Sigma", mountType: "E-mount", releaseYear: 2023, format: "Full-frame" },
  { name: "Sigma 50mm f/2.8 DG DN Contemporary", type: "lens", brand: "Sigma", mountType: "E-mount", releaseYear: 2023, format: "Full-frame" },
  { name: "Sigma 65mm f/2 DG DN Contemporary", type: "lens", brand: "Sigma", mountType: "E-mount", releaseYear: 2020, format: "Full-frame" },
  { name: "Sigma 85mm f/1.4 DG DN Art", type: "lens", brand: "Sigma", mountType: "E-mount", releaseYear: 2020, format: "Full-frame" },
  { name: "Sigma 90mm f/2.8 DG DN Contemporary", type: "lens", brand: "Sigma", mountType: "E-mount", releaseYear: 2021, format: "Full-frame" },
  { name: "Sigma 105mm f/2.8 DG DN Macro Art", type: "lens", brand: "Sigma", mountType: "E-mount", releaseYear: 2020, format: "Full-frame" },

  // Sigma APS-C Lenses for Sony E-mount
  { name: "Sigma 16mm f/1.4 DC DN Contemporary", type: "lens", brand: "Sigma", mountType: "E-mount", releaseYear: 2017, format: "APS-C" },
  { name: "Sigma 30mm f/1.4 DC DN Contemporary", type: "lens", brand: "Sigma", mountType: "E-mount", releaseYear: 2016, format: "APS-C" },
  { name: "Sigma 56mm f/1.4 DC DN Contemporary", type: "lens", brand: "Sigma", mountType: "E-mount", releaseYear: 2018, format: "APS-C" },
  { name: "Sigma 18-50mm f/2.8 DC DN Contemporary", type: "lens", brand: "Sigma", mountType: "E-mount", releaseYear: 2021, format: "APS-C" },
  { name: "Sigma 10-18mm f/2.8 DC DN Contemporary", type: "lens", brand: "Sigma", mountType: "E-mount", releaseYear: 2023, format: "APS-C" },
  { name: "Sigma 18-300mm f/3.5-6.3 DC MACRO OS HSM Contemporary", type: "lens", brand: "Sigma", mountType: "E-mount", releaseYear: 2021, format: "APS-C" },

  // Tamron Lenses for Sony E-mount
  { name: "Tamron 17-28mm f/2.8 Di III RXD", type: "lens", brand: "Tamron", mountType: "E-mount", releaseYear: 2019 },
  { name: "Tamron 28-75mm f/2.8 Di III VXD G2", type: "lens", brand: "Tamron", mountType: "E-mount", releaseYear: 2021 },
  { name: "Tamron 28-200mm f/2.8-5.6 Di III RXD", type: "lens", brand: "Tamron", mountType: "E-mount", releaseYear: 2020 },
  { name: "Tamron 35-150mm f/2-2.8 Di III VXD", type: "lens", brand: "Tamron", mountType: "E-mount", releaseYear: 2021 },
  { name: "Tamron 70-180mm f/2.8 Di III VXD", type: "lens", brand: "Tamron", mountType: "E-mount", releaseYear: 2020 },
  { name: "Tamron 150-500mm f/5-6.7 Di III VC VXD", type: "lens", brand: "Tamron", mountType: "E-mount", releaseYear: 2021 },
  { name: "Tamron 20mm f/2.8 Di III OSD M1:2", type: "lens", brand: "Tamron", mountType: "E-mount", releaseYear: 2019 },
  { name: "Tamron 24mm f/2.8 Di III OSD M1:2", type: "lens", brand: "Tamron", mountType: "E-mount", releaseYear: 2019 },
  { name: "Tamron 35mm f/2.8 Di III OSD M1:2", type: "lens", brand: "Tamron", mountType: "E-mount", releaseYear: 2019 },

  // Additional Tamron APS-C Lens for Sony E-mount
  { name: "Tamron 17-70mm f/2.8 Di III-A VC RXD", type: "lens", brand: "Tamron", mountType: "E-mount", releaseYear: 2021, format: "APS-C" },
  { name: "Tamron 11-20mm f/2.8 Di III-A RXD", type: "lens", brand: "Tamron", mountType: "E-mount", releaseYear: 2021, format: "APS-C" },
  { name: "Tamron 18-300mm f/3.5-6.3 Di III-A VC VXD", type: "lens", brand: "Tamron", mountType: "E-mount", releaseYear: 2021, format: "APS-C" },
  { name: "Tamron 18-200mm f/3.5-6.3 Di III VC", type: "lens", brand: "Tamron", mountType: "E-mount", releaseYear: 2011, format: "APS-C" },
];