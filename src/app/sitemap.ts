import { MetadataRoute } from 'next'
import fs from 'fs'
import path from 'path'

const BASE_URL = 'https://miguelito.dev'
const APP_DIR = path.join(process.cwd(), 'src', 'app')

// Função para obter todas as páginas a partir da estrutura de diretórios
function getPagesFromDir(dir: string, basePath: string = ''): string[] {
  const entries = fs.readdirSync(dir, { withFileTypes: true })
  let pages: string[] = []

  for (const entry of entries) {
    // Ignora arquivos e pastas que começam com . ou _ ou são APIs
    if (entry.name.startsWith('.') || entry.name.startsWith('_') || entry.name === 'api') {
      continue
    }

    const fullPath = path.join(dir, entry.name)
    const relativePath = basePath ? `${basePath}/${entry.name}` : entry.name

    // Se for um diretório, verifica se contém page.tsx ou page.jsx
    if (entry.isDirectory()) {
      const pageFiles = fs.readdirSync(fullPath).filter(file => 
        file.startsWith('page.') // Verifica se tem page.tsx, page.jsx, etc.
      )
      
      // Se tiver um arquivo page, adiciona ao array
      if (pageFiles.length > 0) {
        pages.push(relativePath)
      }
      
      // Recursivamente verifica subdiretórios
      pages = pages.concat(getPagesFromDir(fullPath, relativePath))
    }
  }

  return pages
}

export default function sitemap(): MetadataRoute.Sitemap {
  // Obtém todas as páginas automaticamente
  const pages = getPagesFromDir(APP_DIR)
  
  // Página inicial (raiz)
  const allPages = [''].concat(pages)
  
  return allPages.map(pagePath => {
    // Define prioridades e frequências com base no caminho
    let priority = 0.8
    let changeFrequency: 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never' = 'weekly'
    
    if (pagePath === '') {
      priority = 1.0
      changeFrequency = 'weekly'
    } else if (pagePath === 'about' || pagePath === 'capabilities') {
      priority = 0.9
      changeFrequency = 'monthly'
    }
    
    return {
      url: `${BASE_URL}/${pagePath}`.replace(/\/$/, ''), // Remove trailing slash for root
      lastModified: new Date(),
      changeFrequency,
      priority,
    }
  })
}