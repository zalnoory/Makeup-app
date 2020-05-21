const brands = [
  'nyx',
  'clinique',
  'benefit',
  'smashbox',
  'almay',
  'dior',
  'covergirl',
  'physicians formula',
  'maybelline',
]

const productTag = [
  'Vegan',
  'Canadian',
  'EcoCert',
  'Chemical Free',
  'Gluten Free',
  'CertClean',
  'purpicks',
  'No Talc',
  'Hypoallergenic',
  'EWG Verified',
  'silicone free',
  'oil free',
  'alcohol free',
  'cruelty free',
  'water free',
  'Natural',
]

export function getBrands() {
  return brands.filter((b) => b)
}

export function getProductTag() {
  return productTag.filter((t) => t)
}
