// Configuração do app da Web no Firebase (Console → Configurações do projeto → Seus apps → SDK).
// Enquanto estiver vazia, a sincronização fica escondida e o site funciona só com o aparelho.
// Esses valores não são segredo: vão no site de qualquer jeito. Quem protege os dados são as
// regras do Firestore (arquivo firestore.rules).
export const firebaseConfig = {
  apiKey: '',
  authDomain: '',
  projectId: '',
  appId: '',
  measurementId: '', // opcional: só para as estatísticas de acesso (Google Analytics)
}

export const syncAvailable = Boolean(firebaseConfig.apiKey && firebaseConfig.projectId)
export const analyticsAvailable = Boolean(firebaseConfig.apiKey && firebaseConfig.appId && firebaseConfig.measurementId)
