// Configuração do app da Web no Firebase (Console → Configurações do projeto → Seus apps → SDK).
// Enquanto estiver vazia, a sincronização fica escondida e o site funciona só com o aparelho.
// Esses valores não são segredo: vão no site de qualquer jeito. Quem protege os dados são as
// regras do Firestore (arquivo firestore.rules).
export const firebaseConfig = {
  apiKey: 'AIzaSyC2kT6CywdpuI1Bcg2o9Z6aC0_2_4WnEzs',
  authDomain: 'genshinworld-42ef4.firebaseapp.com',
  projectId: 'genshinworld-42ef4',
  appId: '1:63509474172:web:1740beb7f68d47887a52f9',
  measurementId: 'G-6V13493BXX', // opcional: só para as estatísticas de acesso (Google Analytics)
}

export const syncAvailable = Boolean(firebaseConfig.apiKey && firebaseConfig.projectId)
export const analyticsAvailable = Boolean(firebaseConfig.apiKey && firebaseConfig.appId && firebaseConfig.measurementId)
