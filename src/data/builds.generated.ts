import type { Build } from './builds'

// Gerado a partir de guias (Icy Veins e similares). Os ids são os mesmos da lista de personagens.
export const GENERATED_BUILDS: Record<string, Build> = {
 "albedo": {
  "patch": "7.1",
  "sources": [
   {
    "label": "Icy Veins: builds",
    "url": "https://www.icy-veins.com/genshin-impact/albedo-guide-best-builds"
   },
   {
    "label": "Icy Veins: equipes",
    "url": "https://www.icy-veins.com/genshin-impact/albedo-team-guide"
   }
  ],
  "weapons": [
   {
    "name": "Peak Patrol Song",
    "note": "Melhor no geral: o DEF% maximiza o buff de DMG% da equipe e ainda dá um buff ao time."
   },
   {
    "name": "Uraku Misugiri",
    "note": "Melhor para o dano pessoal do Albedo, pouco atrás da Peak Patrol Song no geral."
   },
   {
    "name": "Cinnabar Spindle",
    "note": "Melhor 4 estrelas, aumenta o dano e ajuda a maximizar o buff de DMG% (não pode mais ser obtida)."
   },
   {
    "name": "Lightbearing Moonshard",
    "note": "Boa arma 5 estrelas de atributos, supera todas as 4 estrelas exceto a Cinnabar Spindle."
   },
   {
    "name": "Harbinger of Dawn",
    "note": "Melhor opção gratuita, mas exige manter a Vida acima de 90%."
   },
   {
    "name": "Wolf-Fang",
    "note": "Alternativa à Harbinger of Dawn se não for possível manter a Vida acima de 90%."
   },
   {
    "name": "Flute of Ezpitzal",
    "note": "Dano próximo ao da Harbinger e o DEF% ajuda a maximizar o buff de DMG%."
   }
  ],
  "artifacts": [
   {
    "name": "Celestial Gift",
    "note": "Melhor opção padrão quando nenhum outro suporte da equipe usa um set de buff."
   },
   {
    "name": "Husk of Opulent Dreams",
    "note": "Melhor quando outro personagem Hexerei usa Celestial Gift; maior dano pessoal e mais DEF%."
   },
   {
    "name": "Golden Troupe",
    "note": "Boa alternativa à Husk, com dano um pouco menor e buff de DMG% menor."
   }
  ],
  "mainStats": [
   {
    "slot": "Areia",
    "value": "DEF%"
   },
   {
    "slot": "Cálice",
    "value": "Geo DMG ou DEF% (o que tiver melhores substats)"
   },
   {
    "slot": "Tiara",
    "value": "Taxa CRIT ou Dano CRIT"
   }
  ],
  "substats": "Prioridade: Taxa CRIT > Dano CRIT > DEF%.",
  "teams": [
   {
    "name": "Geo DPS",
    "members": [
     {
      "name": "Albedo"
     },
     {
      "name": "Durin"
     },
     {
      "name": "Nicole"
     },
     {
      "name": "Navia"
     }
    ],
    "note": "Albedo é ótimo suporte para a maioria dos Geo DPS; Durin dá dano Pyro e redução de RES."
   },
   {
    "name": "Lunar-Crystallize",
    "members": [
     {
      "name": "Albedo"
     },
     {
      "name": "Linnea"
     },
     {
      "name": "Columbina"
     },
     {
      "name": "Mona"
     }
    ],
    "note": "Linnea habilita e fortalece Lunar-Crystallize; Columbina fornece o Hydro."
   },
   {
    "name": "Hexerei DPS",
    "members": [
     {
      "name": "Albedo"
     },
     {
      "name": "Venti"
     },
     {
      "name": "Durin"
     },
     {
      "name": "Nicole"
     }
    ],
    "note": "Albedo dá até 42% de DMG a personagens Hexerei, sinergia natural com Venti."
   }
  ]
 },
 "alhaitham": {
  "patch": "7.0",
  "sources": [
   {
    "label": "Icy Veins: builds",
    "url": "https://www.icy-veins.com/genshin-impact/alhaitham-guide-best-builds"
   },
   {
    "label": "Icy Veins: equipes",
    "url": "https://www.icy-veins.com/genshin-impact/alhaitham-team-guide"
   }
  ],
  "weapons": [
   {
    "name": "Light of Foliar Incision",
    "note": "Arma exclusiva e melhor opção; dá Dano CRIT, Taxa CRIT e dano extra de Ataque Normal e Habilidade."
   },
   {
    "name": "Primordial Jade Cutter",
    "note": "Melhor contra vários inimigos, pois o efeito da Foliar Incision acaba após 28 instâncias de dano."
   },
   {
    "name": "Uraku Misugiri",
    "note": "Rende quase igual à Foliar Incision com um aliado Geo como Zhongli."
   },
   {
    "name": "Mistsplitter Reforged",
    "note": "Espada 5 estrelas citada como utilizável, sem ranking no guia."
   },
   {
    "name": "Wolf-Fang",
    "note": "Melhor 4 estrelas (Passe de Batalha): reforça Habilidade e Supremo e dá Taxa CRIT."
   },
   {
    "name": "Iron Sting",
    "note": "Melhor opção gratuita, craftável, com ATQ, Proficiência Elemental e dano."
   }
  ],
  "artifacts": [
   {
    "name": "Gilded Dreams",
    "note": "Melhor quando outro personagem Dendro usa Deepwood Memories; dá Proficiência Elemental e buffs."
   },
   {
    "name": "Deepwood Memories",
    "note": "Melhor quando Alhaitham é o único Dendro; aumenta dano Dendro e reduz RES."
   },
   {
    "name": "Marechaussee Hunter",
    "note": "Recomendado apenas com Furina, cujo dreno de Vida acumula os stacks rápido."
   }
  ],
  "mainStats": [
   {
    "slot": "Areia",
    "value": "Proficiência Elemental"
   },
   {
    "slot": "Cálice",
    "value": "Dendro DMG"
   },
   {
    "slot": "Tiara",
    "value": "Taxa CRIT ou Dano CRIT"
   }
  ],
  "substats": "Prioridade: Recarga de Energia > Proficiência Elemental > Taxa CRIT = Dano CRIT, com pelo menos 300 de Proficiência Elemental.",
  "teams": [
   {
    "name": "Luna-Bloom",
    "members": [
     {
      "name": "Alhaitham"
     },
     {
      "name": "Lauma"
     },
     {
      "name": "Columbina"
     },
     {
      "name": "Nahida"
     }
    ],
    "note": "Lauma habilita o Lunar-Bloom e Nahida serve de bateria de energia."
   },
   {
    "name": "Nilou Bloom",
    "members": [
     {
      "name": "Alhaitham"
     },
     {
      "name": "Nilou"
     },
     {
      "name": "Yelan"
     },
     {
      "name": "Baizhu"
     }
    ],
    "note": "Equipe só Dendro e Hydro para os Bountiful Cores de Nilou; Baizhu cura e protege."
   },
   {
    "name": "Hyperbloom",
    "members": [
     {
      "name": "Alhaitham"
     },
     {
      "name": "Furina"
     },
     {
      "name": "Raiden Shogun"
     },
     {
      "name": "Baizhu"
     }
    ],
    "note": "Furina dá dano e buffs, Raiden ativa o Hyperbloom e Baizhu cura."
   }
  ]
 },
 "arataki-itto": {
  "patch": "7.0",
  "sources": [
   {
    "label": "Icy Veins: builds",
    "url": "https://www.icy-veins.com/genshin-impact/arataki-itto-guide-best-builds"
   },
   {
    "label": "Icy Veins: equipes",
    "url": "https://www.icy-veins.com/genshin-impact/arataki-itto-team-guide"
   }
  ],
  "weapons": [
   {
    "name": "Redhorn Stonethresher",
    "note": "Arma exclusiva e objetivamente a melhor; dá Dano CRIT e escala com DEF."
   },
   {
    "name": "Whiteblind",
    "note": "Melhor opção gratuita, craftável, com bônus de ATQ e DEF ao acertar."
   },
   {
    "name": "Beacon of the Reed Sea",
    "note": "Alternativa 5 estrelas listada pelo guia."
   },
   {
    "name": "Verdict",
    "note": "Alternativa 5 estrelas listada pelo guia."
   },
   {
    "name": "A Thousand Blazing Suns",
    "note": "Alternativa 5 estrelas listada pelo guia."
   },
   {
    "name": "Serpent Spine",
    "note": "Alternativa listada pelo guia."
   },
   {
    "name": "Skyward Pride",
    "note": "Alternativa listada pelo guia."
   }
  ],
  "artifacts": [
   {
    "name": "Husk of Opulent Dreams",
    "note": "Único set necessário (4 peças) e fácil de farmar no Strongbox."
   },
   {
    "name": "Archaic Petra",
    "note": "2 Husk + 2 Archaic Petra dá mais Geo DMG, mas rende menos que o set completo."
   }
  ],
  "mainStats": [
   {
    "slot": "Areia",
    "value": "DEF%"
   },
   {
    "slot": "Cálice",
    "value": "Geo DMG"
   },
   {
    "slot": "Tiara",
    "value": "Dano CRIT ou Taxa CRIT"
   }
  ],
  "substats": "Prioridade: DEF > Taxa CRIT / Dano CRIT > Recarga de Energia > ATQ%.",
  "teams": [
   {
    "name": "Mono-Geo",
    "members": [
     {
      "name": "Arataki Itto"
     },
     {
      "name": "Gorou"
     },
     {
      "name": "Chiori"
     },
     {
      "name": "Zhongli"
     }
    ],
    "note": "Gorou é o parceiro mais importante; Zhongli absorve o dano recebido."
   },
   {
    "name": "Duplo/Triplo Geo",
    "members": [
     {
      "name": "Arataki Itto"
     },
     {
      "name": "Xilonen"
     },
     {
      "name": "Columbina"
     },
     {
      "name": "Illuga"
     }
    ],
    "note": "Xilonen é um dos melhores parceiros: redução de RES Geo, cura e flexibilidade."
   },
   {
    "name": "Mono-Geo",
    "members": [
     {
      "name": "Arataki Itto"
     },
     {
      "name": "Gorou"
     },
     {
      "name": "Chiori"
     },
     {
      "name": "Albedo"
     }
    ],
    "note": "Melhor alternativa; Albedo adiciona dano off-field."
   }
  ]
 },
 "arlecchino": {
  "patch": "7.1",
  "sources": [
   {
    "label": "Icy Veins: builds",
    "url": "https://www.icy-veins.com/genshin-impact/arlecchino-guide-best-builds"
   },
   {
    "label": "Icy Veins: equipes",
    "url": "https://www.icy-veins.com/genshin-impact/arlecchino-team-guide"
   }
  ],
  "weapons": [
   {
    "name": "Crimson Moon's Semblance",
    "note": "Arma exclusiva e melhor opção; dá Taxa CRIT, mais Bond of Life e bônus de dano."
   },
   {
    "name": "Fractured Halo",
    "note": "Arma 5 estrelas de atributos com ATQ e Dano CRIT."
   },
   {
    "name": "Staff of the Scarlet Sands",
    "note": "Converte Proficiência Elemental em ATQ, ótima com Areia de PE em Melt/Vaporize."
   },
   {
    "name": "Ballad of the Fjords",
    "note": "Arma do Passe de Batalha que dá PE com três elementos na equipe."
   },
   {
    "name": "Deathmatch",
    "note": "Arma do Passe de Batalha forte e consistente em vários tipos de equipe."
   },
   {
    "name": "White Tassel",
    "note": "Arma gratuita 3 estrelas com dano de Ataque Normal e Taxa CRIT."
   }
  ],
  "artifacts": [
   {
    "name": "Fragment of Harmonic Whimsy",
    "note": "Frequentemente o melhor set em equipes Melt/Vaporize."
   },
   {
    "name": "Gladiator's Finale",
    "note": "Segunda melhor opção; diferenças são pequenas e substats melhores compensam."
   },
   {
    "name": "Echoes of an Offering",
    "note": "Terceira opção do ranking de dano em Melt/Vaporize."
   }
  ],
  "mainStats": [
   {
    "slot": "Areia",
    "value": "ATQ% (Proficiência Elemental em Melt/Vaporize se tiver melhores substats)"
   },
   {
    "slot": "Cálice",
    "value": "Pyro DMG (ATQ% se tiver melhores substats)"
   },
   {
    "slot": "Tiara",
    "value": "Taxa CRIT ou Dano CRIT"
   }
  ],
  "substats": "Prioridade: Taxa CRIT > Dano CRIT > ATQ% = Proficiência Elemental.",
  "teams": [
   {
    "name": "Melt",
    "members": [
     {
      "name": "Arlecchino"
     },
     {
      "name": "Citlali"
     },
     {
      "name": "Bennett"
     },
     {
      "name": "Xilonen"
     }
    ],
    "note": "Citlali dá um pouco mais de dano que Vaporize e um escudo."
   },
   {
    "name": "Vaporize",
    "members": [
     {
      "name": "Arlecchino"
     },
     {
      "name": "Yelan"
     },
     {
      "name": "Bennett"
     },
     {
      "name": "Xilonen"
     }
    ],
    "note": "Yelan habilita o Vaporize com dano off-field e bônus de dano."
   },
   {
    "name": "Overload",
    "members": [
     {
      "name": "Arlecchino"
     },
     {
      "name": "Bennett"
     },
     {
      "name": "Fischl"
     },
     {
      "name": "Chevreuse"
     }
    ],
    "note": "Chevreuse reduz RES Pyro/Electro e dá ATQ; Fischl ativa o Overload."
   }
  ]
 },
 "baizhu": {
  "patch": "7.0",
  "sources": [
   {
    "label": "Icy Veins: builds",
    "url": "https://www.icy-veins.com/genshin-impact/baizhu-guide-best-builds"
   },
   {
    "label": "Icy Veins: equipes",
    "url": "https://www.icy-veins.com/genshin-impact/baizhu-team-guide"
   }
  ],
  "weapons": [
   {
    "name": "Jadefall's Splendor",
    "note": "Arma exclusiva e melhor opção por Vida% e buffs, mas não vale investir muito nela."
   },
   {
    "name": "Prototype Amber",
    "note": "Melhor opção gratuita; no R5 rende igual ou mais que a exclusiva, com energia, Vida% e cura."
   },
   {
    "name": "Favonius Codex",
    "note": "Opção listada pelo guia, gera partículas de energia com críticos."
   },
   {
    "name": "Everlasting Moonglow",
    "note": "Opção listada pelo guia, sem ranking."
   },
   {
    "name": "Sacrificial Fragments",
    "note": "Opção listada pelo guia, sem ranking."
   },
   {
    "name": "Hakushin Ring",
    "note": "Opção listada pelo guia, sem ranking."
   }
  ],
  "artifacts": [
   {
    "name": "Ocean-Hued Clam",
    "note": "Set mais geral e viável; aumenta a cura e causa dano com a explosão de Foam."
   },
   {
    "name": "Deepwood Memories",
    "note": "Só se ninguém mais na equipe usar; aumenta dano Dendro e reduz RES, mas o efeito de 4 peças é difícil de ativar."
   }
  ],
  "mainStats": [
   {
    "slot": "Areia",
    "value": "Vida% ou Recarga de Energia"
   },
   {
    "slot": "Cálice",
    "value": "Vida%"
   },
   {
    "slot": "Tiara",
    "value": "Vida%"
   }
  ],
  "substats": "Prioridade: Recarga de Energia > Vida% > Vida > Proficiência Elemental > Taxa CRIT (só com Favonius Codex).",
  "teams": [
   {
    "name": "Hyperbloom",
    "members": [
     {
      "name": "Baizhu"
     },
     {
      "name": "Neuvillette"
     },
     {
      "name": "Lauma"
     },
     {
      "name": "Ineffa"
     }
    ],
    "note": "Baizhu sustenta a equipe e aplica o Dendro necessário ao Hyperbloom."
   },
   {
    "name": "Nilou Bloom",
    "members": [
     {
      "name": "Baizhu"
     },
     {
      "name": "Nilou"
     },
     {
      "name": "Yelan"
     },
     {
      "name": "Alhaitham"
     }
    ],
    "note": "Baizhu fornece escudos e cura que Nilou precisa."
   },
   {
    "name": "Quicken",
    "members": [
     {
      "name": "Baizhu"
     },
     {
      "name": "Yae Miko"
     },
     {
      "name": "Fischl"
     },
     {
      "name": "Alhaitham"
     }
    ],
    "note": "A passiva de Baizhu dá grande bônus de dano ao time em equipes Quicken."
   }
  ]
 },
 "chasca": {
  "patch": "6.0",
  "sources": [
   {
    "label": "Icy Veins: builds",
    "url": "https://www.icy-veins.com/genshin-impact/chasca-guide-best-builds"
   },
   {
    "label": "Genshin-Builds: equipes (Icy Veins team guide indisponível)",
    "url": "https://genshin-builds.com/en/teams/chasca"
   }
  ],
  "weapons": [
   {
    "name": "Astral Vulture's Crimson Plumage",
    "note": "Arma exclusiva, de longe a melhor com larga margem."
   },
   {
    "name": "Aqua Simulacra",
    "note": "Forte opção 5 estrelas, sem ranking contra a Flower-Wreathed Feathers."
   },
   {
    "name": "Flower-Wreathed Feathers",
    "note": "Forte opção 4 estrelas de gacha."
   },
   {
    "name": "Song of Stillness",
    "note": "Melhor arma gratuita para a Chasca."
   },
   {
    "name": "The First Great Magic",
    "note": "Alternativa listada pelo guia, sem ranking."
   },
   {
    "name": "Scion of the Blazing Sun",
    "note": "Alternativa listada pelo guia, sem ranking."
   },
   {
    "name": "Skyward Harp",
    "note": "Alternativa listada pelo guia, sem ranking."
   }
  ],
  "artifacts": [
   {
    "name": "Obsidian Codex",
    "note": "De longe o melhor set pelos buffs que dá à build."
   },
   {
    "name": "Marechaussee Hunter",
    "note": "Alternativa viável, principalmente com Furina."
   }
  ],
  "mainStats": [
   {
    "slot": "Areia",
    "value": "ATQ% (depois Proficiência Elemental)"
   },
   {
    "slot": "Cálice",
    "value": "ATQ% (Pyro DMG só com 2 personagens Pyro)"
   },
   {
    "slot": "Tiara",
    "value": "Dano CRIT (depois Taxa CRIT)"
   }
  ],
  "substats": "Prioridade: Taxa CRIT e Dano CRIT > ATQ% > Proficiência Elemental > Recarga de Energia.",
  "teams": [
   {
    "name": "Vaporize",
    "members": [
     {
      "name": "Chasca"
     },
     {
      "name": "Furina"
     },
     {
      "name": "Yanfei"
     },
     {
      "name": "Bennett"
     }
    ],
    "note": "Os projéteis da Chasca absorvem elementos para Vaporize com o Hydro da Furina."
   },
   {
    "name": "Vaporize",
    "members": [
     {
      "name": "Chasca"
     },
     {
      "name": "Furina"
     },
     {
      "name": "Xilonen"
     },
     {
      "name": "Bennett"
     }
    ],
    "note": "Xilonen reduz a RES elemental e cura; Bennett dá grande buff de ATQ."
   },
   {
    "name": "Vaporize e Melt",
    "members": [
     {
      "name": "Chasca"
     },
     {
      "name": "Furina"
     },
     {
      "name": "Layla"
     },
     {
      "name": "Bennett"
     }
    ],
    "note": "Chasca absorve elementos para ativar Vaporize e Melt; Layla dá escudo."
   }
  ]
 },
 "chiori": {
  "patch": "7.1",
  "sources": [
   {
    "label": "Icy Veins: builds",
    "url": "https://www.icy-veins.com/genshin-impact/chiori-guide-best-builds"
   },
   {
    "label": "Icy Veins: equipes",
    "url": "https://www.icy-veins.com/genshin-impact/chiori-team-guide"
   }
  ],
  "weapons": [
   {
    "name": "Uraku Misugiri",
    "note": "Arma exclusiva e a mais forte para o dano pessoal dela por ampla margem."
   },
   {
    "name": "Peak Patrol Song",
    "note": "Segunda melhor em dano pessoal e dá buff de Dano Elemental ao time; muitas vezes a melhor no geral."
   },
   {
    "name": "Splendor of Tranquil Waters",
    "note": "Forte apenas com Furina, aumentando o dano da Habilidade dela."
   },
   {
    "name": "Lightbearing Moonshard",
    "note": "Boa arma 5 estrelas de atributos CRIT, equivalente à Foliar Incision e Jade Cutter."
   },
   {
    "name": "Light of Foliar Incision",
    "note": "Boa arma 5 estrelas de atributos CRIT."
   },
   {
    "name": "Primordial Jade Cutter",
    "note": "Boa arma 5 estrelas de atributos CRIT."
   },
   {
    "name": "Harbinger of Dawn",
    "note": "Melhor opção gratuita, enquanto mantiver a Vida acima de 90%."
   }
  ],
  "artifacts": [
   {
    "name": "Golden Troupe",
    "note": "Geralmente o melhor set, sobretudo com foco em dano de Habilidade."
   },
   {
    "name": "Husk of Opulent Dreams",
    "note": "Rende parecido e pode ser melhor com Supremo consistente; sempre melhor para C6 em campo."
   },
   {
    "name": "Silken Moon's Serenade",
    "note": "Fraco para dano pessoal, mas útil em equipes Lunar-Crystallize pelo buff de PE."
   }
  ],
  "mainStats": [
   {
    "slot": "Areia",
    "value": "DEF% (depois ATQ%)"
   },
   {
    "slot": "Cálice",
    "value": "Geo DMG (depois DEF%)"
   },
   {
    "slot": "Tiara",
    "value": "Taxa CRIT ou Dano CRIT (depois DEF%)"
   }
  ],
  "substats": "Prioridade: atributos CRIT > DEF% > ATQ%.",
  "teams": [
   {
    "name": "Lunar-Crystallize off-field",
    "members": [
     {
      "name": "Chiori"
     },
     {
      "name": "Linnea"
     },
     {
      "name": "Columbina"
     },
     {
      "name": "Navia"
     }
    ],
    "note": "Columbina aplica o Hydro e Linnea habilita o Lunar-Crystallize; Navia é o Geo DPS."
   },
   {
    "name": "Lunar-Crystallize off-field",
    "members": [
     {
      "name": "Chiori"
     },
     {
      "name": "Linnea"
     },
     {
      "name": "Columbina"
     },
     {
      "name": "Arataki Itto"
     }
    ],
    "note": "Mesmo núcleo com Arataki Itto como Geo DPS."
   },
   {
    "name": "Lunar-Crystallize off-field",
    "members": [
     {
      "name": "Chiori"
     },
     {
      "name": "Linnea"
     },
     {
      "name": "Columbina"
     },
     {
      "name": "Noelle"
     }
    ],
    "note": "Mesmo núcleo com Noelle como quarto membro."
   }
  ]
 },
 "citlali": {
  "patch": "6.7",
  "sources": [
   {
    "label": "Icy Veins: builds",
    "url": "https://www.icy-veins.com/genshin-impact/citlali-guide-best-builds"
   },
   {
    "label": "Icy Veins: equipes",
    "url": "https://www.icy-veins.com/genshin-impact/citlali-team-guide"
   }
  ],
  "weapons": [
   {
    "name": "Starcaller's Watch",
    "note": "Arma exclusiva e melhor opção; muita Proficiência Elemental e até 28% de dano extra ao personagem com escudo."
   },
   {
    "name": "Thrilling Tales of Dragon Slayers",
    "note": "Melhor opção gratuita; dá 24-48% de ATQ ao próximo personagem, sem uptime total."
   },
   {
    "name": "Etherlight Spindlelute",
    "note": "Dá Recarga de Energia e PE após a Habilidade, permitindo Supremos consistentes."
   },
   {
    "name": "Wandering Evenstar",
    "note": "Dá PE e buffs de ATQ periódicos ao time; forte em refinamentos altos."
   },
   {
    "name": "A Thousand Floating Dreams",
    "note": "Muita PE, mas a passiva ajuda mais personagens de reação."
   },
   {
    "name": "Favonius Codex",
    "note": "Gera partículas de energia com críticos, útil quando precisa de Recarga."
   },
   {
    "name": "Sacrificial Fragments",
    "note": "Dá PE e chance de resetar a recarga da Habilidade."
   }
  ],
  "artifacts": [
   {
    "name": "Scroll of the Hero of Cinder City",
    "note": "Melhor opção; dá energia e Dano Elemental ao time conforme as reações."
   },
   {
    "name": "Tenacity of the Millelith",
    "note": "Forte alternativa, sobretudo se um aliado já usa o Scroll; dá ATQ e Força de Escudo."
   },
   {
    "name": "Noblesse Oblige",
    "note": "Opção sólida de suporte; dá ATQ ao time após o Supremo."
   }
  ],
  "mainStats": [
   {
    "slot": "Areia",
    "value": "Recarga de Energia ou Proficiência Elemental"
   },
   {
    "slot": "Cálice",
    "value": "Proficiência Elemental"
   },
   {
    "slot": "Tiara",
    "value": "Proficiência Elemental (Taxa CRIT com Favonius Codex)"
   }
  ],
  "substats": "Prioridade: Recarga de Energia > Proficiência Elemental.",
  "teams": [
   {
    "name": "Melt",
    "members": [
     {
      "name": "Citlali"
     },
     {
      "name": "Mavuika"
     },
     {
      "name": "Xilonen"
     },
     {
      "name": "Bennett"
     }
    ],
    "note": "Mavuika Melt está entre as equipes mais fortes; Citlali reduz RES Pyro e dá escudo."
   },
   {
    "name": "Melt",
    "members": [
     {
      "name": "Citlali"
     },
     {
      "name": "Lohen"
     },
     {
      "name": "Durin"
     },
     {
      "name": "Nicole"
     }
    ],
    "note": "Durin aplica Cryo para Melt consistente; Citlali dá buffs e redução de RES Pyro."
   },
   {
    "name": "Melt",
    "members": [
     {
      "name": "Citlali"
     },
     {
      "name": "Arlecchino"
     },
     {
      "name": "Xilonen"
     },
     {
      "name": "Bennett"
     }
    ],
    "note": "Arlecchino se beneficia muito da Citlali, cujo escudo é valioso pois ela não pode ser curada."
   }
  ]
 },
 "clorinde": {
  "patch": "7.1",
  "sources": [
   {
    "label": "Icy Veins: builds",
    "url": "https://www.icy-veins.com/genshin-impact/clorinde-guide-best-builds"
   },
   {
    "label": "Icy Veins: equipes",
    "url": "https://www.icy-veins.com/genshin-impact/clorinde-team-guide"
   }
  ],
  "weapons": [
   {
    "name": "Absolution",
    "note": "Arma signature e melhor opção: ATQ base alto e Dano CRIT, com mais dano a cada aumento de Bond of Life."
   },
   {
    "name": "Beyond the Chrysalis",
    "note": "Concede muito Dano CRIT após Habilidade Elemental ou Supremo, com ótimos stats base."
   },
   {
    "name": "Haran Geppaku Futsu",
    "note": "Boa opção 5 estrelas que dá bônus de Dano Elemental e aumenta o dano de Ataque Normal."
   },
   {
    "name": "The Black Sword",
    "note": "Melhor opção 4 estrelas, pois aumenta o dano de Ataque Normal."
   },
   {
    "name": "Finale of the Deep",
    "note": "Melhor opção gratuita, com bom bônus de ATQ pelo efeito de Bond of Life."
   }
  ],
  "artifacts": [
   {
    "name": "Fragment of Harmonic Whimsy",
    "note": "Melhor conjunto: aumenta o dano quando o Bond of Life muda, acumulando até 3 vezes."
   },
   {
    "name": "Thundering Fury",
    "note": "Alternativa forte com 15% de Dano Electro e mais dano de reações."
   },
   {
    "name": "Marechaussee Hunter",
    "note": "Utilizável com Furina, pois a cura constante mantém o bônus de Taxa CRIT."
   }
  ],
  "mainStats": [
   {
    "slot": "Areia",
    "value": "ATQ% (ou Proficiência Elemental)"
   },
   {
    "slot": "Cálice",
    "value": "Dano Electro"
   },
   {
    "slot": "Tiara",
    "value": "Taxa CRIT ou Dano CRIT"
   }
  ],
  "substats": "Prioridade: Recarga de Energia (até o necessário) > Taxa CRIT > Dano CRIT > ATQ% > Proficiência Elemental.",
  "teams": [
   {
    "name": "Lunar-Charged",
    "members": [
     {
      "name": "Clorinde"
     },
     {
      "name": "Ineffa"
     },
     {
      "name": "Yelan"
     },
     {
      "name": "Sucrose"
     }
    ],
    "note": "Ineffa habilita Lunar-Charged com muito dano fora de campo e Yelan aplica Hydro."
   },
   {
    "name": "Lunar-Charged",
    "members": [
     {
      "name": "Clorinde"
     },
     {
      "name": "Ineffa"
     },
     {
      "name": "Columbina"
     },
     {
      "name": "Sucrose"
     }
    ],
    "note": "Columbina habilita Lunar-Charged, que causa mais dano que Electro-Charged, e fornece Hydro e buffs."
   },
   {
    "name": "Lunar-Charged",
    "members": [
     {
      "name": "Clorinde"
     },
     {
      "name": "Fischl"
     },
     {
      "name": "Columbina"
     },
     {
      "name": "Kaedehara Kazuha"
     }
    ],
    "note": "Fischl é um Sub-DPS forte que dá muita energia; Kazuha entra como suporte de buffs."
   }
  ]
 },
 "columbina": {
  "patch": "7.1",
  "sources": [
   {
    "label": "Icy Veins: builds",
    "url": "https://www.icy-veins.com/genshin-impact/columbina-guide-best-builds"
   },
   {
    "label": "Icy Veins: equipes",
    "url": "https://www.icy-veins.com/genshin-impact/columbina-team-guide"
   }
  ],
  "weapons": [
   {
    "name": "Nocturne's Curtain Call",
    "note": "Melhor arma: muito Dano CRIT, Vida% e Recarga de Energia."
   },
   {
    "name": "Reliquary of Truth",
    "note": "Dá muito Dano CRIT, Taxa CRIT e Proficiência Elemental; segunda melhor em times Lunar-Bloom em campo."
   },
   {
    "name": "Sacrificial Jade",
    "note": "Fornece Vida%, PE e Taxa CRIT, mas o efeito se perde se ela ficar muito tempo em campo."
   },
   {
    "name": "Waveriding Whirl",
    "note": "Forte quando refinada, escala com um segundo personagem Hydro no time."
   },
   {
    "name": "Surf's Up",
    "note": "Opção de Dano CRIT que também adiciona Vida%."
   },
   {
    "name": "Prototype Amber",
    "note": "Ótima opção gratuita, com Vida%, energia e alguma cura."
   },
   {
    "name": "Favonius Codex",
    "note": "Melhor opção gratuita no geral, dá Recarga de Energia e partículas."
   }
  ],
  "artifacts": [
   {
    "name": "Aubade of Morningstar and Moon",
    "note": "Padrão para maximizar seu dano fora de campo; não funciona em campo."
   },
   {
    "name": "Night of the Sky's Unveiling",
    "note": "Usado quando ela joga em campo, aumentando Taxa CRIT e dano de reações Lunares."
   },
   {
    "name": "Silken Moon's Serenade",
    "note": "Recomendado para quase qualquer time com Ascendant Gleam."
   }
  ],
  "mainStats": [
   {
    "slot": "Areia",
    "value": "Vida% ou Recarga de Energia"
   },
   {
    "slot": "Cálice",
    "value": "Vida%"
   },
   {
    "slot": "Tiara",
    "value": "Vida%, Taxa CRIT ou Dano CRIT"
   }
  ],
  "substats": "Prioridade: Recarga de Energia (até o necessário) > Vida% > Taxa CRIT / Dano CRIT > Proficiência Elemental.",
  "teams": [
   {
    "name": "Lunar-Bloom",
    "members": [
     {
      "name": "Columbina"
     },
     {
      "name": "Nefer"
     },
     {
      "name": "Lauma"
     },
     {
      "name": "Sucrose"
     }
    ],
    "note": "Nefer e Lauma combinam com ela e Sucrose dá buff de Proficiência Elemental."
   },
   {
    "name": "Lunar-Bloom",
    "members": [
     {
      "name": "Columbina"
     },
     {
      "name": "Nilou"
     },
     {
      "name": "Lauma"
     },
     {
      "name": "Baizhu"
     }
    ],
    "note": "Lauma é parceira de Lunar-Bloom e Baizhu é um bom suporte Dendro."
   },
   {
    "name": "Lunar-Bloom",
    "members": [
     {
      "name": "Columbina"
     },
     {
      "name": "Alhaitham"
     },
     {
      "name": "Lauma"
     },
     {
      "name": "Ineffa"
     }
    ],
    "note": "Alhaitham funciona como DPS Dendro em campo, com Lauma e Ineffa como parceiras fortes."
   }
  ]
 },
 "cyno": {
  "patch": "7.0",
  "sources": [
   {
    "label": "Icy Veins: builds",
    "url": "https://www.icy-veins.com/genshin-impact/cyno-guide-best-builds"
   },
   {
    "label": "Icy Veins: equipes",
    "url": "https://www.icy-veins.com/genshin-impact/cyno-team-guide"
   }
  ],
  "weapons": [
   {
    "name": "Staff of the Scarlet Sands",
    "note": "Melhor por larga margem; CRIT e Proficiência Elemental escalam bem com Stellar-Conduct."
   },
   {
    "name": "Primordial Jade Winged-Spear",
    "note": "Forte acúmulo de ATQ e bom CRIT."
   },
   {
    "name": "Bloodsoaked Ruins",
    "note": "Top se estiver com Columbina, pois Lunar-Charged e Stellar-Conduct podem dividir o time."
   },
   {
    "name": "Fractured Halo",
    "note": "Boa arma 5 estrelas de stats."
   },
   {
    "name": "Staff of Homa",
    "note": "Boa arma 5 estrelas de stats."
   },
   {
    "name": "Symphonist of Scents",
    "note": "Boa arma 5 estrelas de stats."
   },
   {
    "name": "Deathmatch",
    "note": "Melhor opção 4 estrelas, com alto CRIT e ATQ%."
   }
  ],
  "artifacts": [
   {
    "name": "Disenchantment in Deep Shadow",
    "note": "Melhor conjunto, com dano de reação, CRIT e ATQ%."
   },
   {
    "name": "Night of the Sky's Unveiling",
    "note": "Segunda melhor opção se o time tiver Columbina ou Ineffa."
   },
   {
    "name": "Gilded Dreams",
    "note": "Bom se houver Hydro ou Dendro no time para ativar reações."
   }
  ],
  "mainStats": [
   {
    "slot": "Areia",
    "value": "ATQ% ou Proficiência Elemental"
   },
   {
    "slot": "Cálice",
    "value": "ATQ% ou Proficiência Elemental"
   },
   {
    "slot": "Tiara",
    "value": "Taxa CRIT ou Dano CRIT"
   }
  ],
  "substats": "Prioridade: Taxa CRIT / Dano CRIT > ATQ% > Proficiência Elemental.",
  "teams": [
   {
    "name": "Stellar-Conduct",
    "members": [
     {
      "name": "Cyno"
     },
     {
      "name": "Odette"
     },
     {
      "name": "Yae Miko"
     },
     {
      "name": "Alyosha"
     }
    ],
    "note": "Odette é o suporte mais importante, habilitando a reação e dando buffs; Yae Miko causa dano fora de campo."
   },
   {
    "name": "Stellar-Conduct",
    "members": [
     {
      "name": "Cyno"
     },
     {
      "name": "Odette"
     },
     {
      "name": "Traveler"
     },
     {
      "name": "Alyosha"
     }
    ],
    "note": "O Viajante Cryo causa muito dano Stellar-Conduct e recebe os buffs de C1 e C2 do Cyno."
   },
   {
    "name": "Overload",
    "members": [
     {
      "name": "Cyno"
     },
     {
      "name": "Chevreuse"
     },
     {
      "name": "Nicole"
     },
     {
      "name": "Durin"
     }
    ],
    "note": "Chevreuse dá buffs com ótimo tempo ativo; Nicole precisa de pelo menos C1."
   }
  ]
 },
 "dehya": {
  "patch": "6.1 (Luna II)",
  "sources": [
   {
    "label": "Icy Veins: builds",
    "url": "https://www.icy-veins.com/genshin-impact/dehya-guide-best-builds"
   },
   {
    "label": "Icy Veins: equipes (seção de times na página de builds)",
    "url": "https://www.icy-veins.com/genshin-impact/dehya-guide-best-builds"
   }
  ],
  "weapons": [
   {
    "name": "Beacon of the Reed Sea",
    "note": "Melhor arma para DPS principal, aumenta ATQ e também Vida se ela não tiver escudo."
   },
   {
    "name": "Prototype Archaic",
    "note": "Opção fácil de forjar para jogadores gratuitos."
   },
   {
    "name": "Redhorn Stonethresher",
    "note": "Alternativa valiosa para DPS principal."
   },
   {
    "name": "Wolf's Gravestone",
    "note": "Alternativa valiosa para DPS principal."
   },
   {
    "name": "Skyward Pride",
    "note": "Alternativa valiosa para DPS principal."
   },
   {
    "name": "The Unforged",
    "note": "Alternativa valiosa para DPS principal."
   }
  ],
  "artifacts": [
   {
    "name": "Emblem of Severed Fate",
    "note": "Melhor conjunto para Dehya como DPS principal."
   },
   {
    "name": "Vourukasha's Glow",
    "note": "Dá mais dano, mas pode faltar Recarga de Energia."
   },
   {
    "name": "Marechaussee Hunter",
    "note": "Usar apenas com a Furina no time."
   }
  ],
  "mainStats": [
   {
    "slot": "Areia",
    "value": "ATQ% ou Recarga de Energia"
   },
   {
    "slot": "Cálice",
    "value": "Dano Pyro"
   },
   {
    "slot": "Tiara",
    "value": "Taxa CRIT ou Dano CRIT"
   }
  ],
  "substats": "Prioridade: Recarga de Energia (até o necessário) > Taxa CRIT / Dano CRIT > ATQ% > Vida%.",
  "teams": [
   {
    "name": "Triple Pyro (DPS principal)",
    "members": [
     {
      "name": "Dehya"
     },
     {
      "name": "Bennett"
     },
     {
      "name": "Kaedehara Kazuha"
     },
     {
      "name": "Xiangling"
     }
    ],
    "note": "Acumula buffs; Bennett cura e Furina pode substituir Kazuha para mais dano."
   },
   {
    "name": "Dehya de suporte",
    "members": [
     {
      "name": "Dehya"
     },
     {
      "name": "Yelan"
     },
     {
      "name": "Hu Tao"
     },
     {
      "name": "Xingqiu"
     }
    ],
    "note": "Dehya absorve dano para o time e serve a personagens sensíveis a interrupção."
   },
   {
    "name": "Dehya DPS fora de campo",
    "members": [
     {
      "name": "Dehya"
     },
     {
      "name": "Bennett"
     },
     {
      "name": "Ganyu"
     },
     {
      "name": "Nahida"
     }
    ],
    "note": "Dehya aplica Pyro fora de campo para habilitar Burgeon e Derretimento."
   }
  ]
 },
 "emilie": {
  "patch": "7.1",
  "sources": [
   {
    "label": "Icy Veins: builds",
    "url": "https://www.icy-veins.com/genshin-impact/emilie-guide-best-builds"
   },
   {
    "label": "Icy Veins: equipes",
    "url": "https://www.icy-veins.com/genshin-impact/emilie-team-guide"
   }
  ],
  "weapons": [
   {
    "name": "Lumidouce Elegy",
    "note": "Arma signature, dá ótimos stats e energia para usar o Supremo toda rotação."
   },
   {
    "name": "Calamity Queller",
    "note": "Melhor stat stick 5 estrelas, com bônus de Dano Elemental e ATQ dobrado fora de campo."
   },
   {
    "name": "Fractured Halo",
    "note": "Boa opção 5 estrelas de stats."
   },
   {
    "name": "Staff of Homa",
    "note": "Boa opção 5 estrelas de stats."
   },
   {
    "name": "Staff of the Scarlet Sands",
    "note": "Alternativa 5 estrelas viável."
   },
   {
    "name": "Symphonist of Scents",
    "note": "Alternativa 5 estrelas viável."
   },
   {
    "name": "Deathmatch",
    "note": "Melhor opção 4 estrelas, rivaliza com a maioria das 5 estrelas em R5."
   }
  ],
  "artifacts": [
   {
    "name": "Unfinished Reverie",
    "note": "Um dos melhores; use se um aliado puder equipar Deepwood Memories."
   },
   {
    "name": "Deepwood Memories",
    "note": "Um dos melhores; use se ninguém mais puder equipá-lo."
   },
   {
    "name": "Golden Troupe",
    "note": "Melhor alternativa para dano pessoal, aumenta o dano da Habilidade Elemental."
   }
  ],
  "mainStats": [
   {
    "slot": "Areia",
    "value": "ATQ%"
   },
   {
    "slot": "Cálice",
    "value": "Dano Dendro ou ATQ%"
   },
   {
    "slot": "Tiara",
    "value": "Taxa CRIT ou Dano CRIT"
   }
  ],
  "substats": "Prioridade: Taxa CRIT > Dano CRIT > ATQ% > Recarga de Energia.",
  "teams": [
   {
    "name": "Burning puro",
    "members": [
     {
      "name": "Emilie"
     },
     {
      "name": "Durin"
     },
     {
      "name": "Nicole"
     },
     {
      "name": "Kinich"
     }
    ],
    "note": "Durin dá Pyro fora de campo e RES shred; Nicole aumenta ATQ do time."
   },
   {
    "name": "Burning puro",
    "members": [
     {
      "name": "Emilie"
     },
     {
      "name": "Bennett"
     },
     {
      "name": "Iansan"
     },
     {
      "name": "Kinich"
     }
    ],
    "note": "Burning se sustenta contra uma onda de inimigos; Iansan fortalece o Dendro."
   },
   {
    "name": "Burning puro",
    "members": [
     {
      "name": "Emilie"
     },
     {
      "name": "Durin"
     },
     {
      "name": "Nicole"
     },
     {
      "name": "Klee"
     }
    ],
    "note": "Klee, que rende pouco em Vaporize ou Derretimento, aproveita bem a Emilie."
   }
  ]
 },
 "escoffier": {
  "patch": "7.1",
  "sources": [
   {
    "label": "Icy Veins: builds",
    "url": "https://www.icy-veins.com/genshin-impact/escoffier-guide-best-builds"
   },
   {
    "label": "Icy Veins: equipes",
    "url": "https://www.icy-veins.com/genshin-impact/escoffier-team-guide"
   }
  ],
  "weapons": [
   {
    "name": "Symphonist of Scents",
    "note": "Arma signature e melhor: ATQ% para ela e o personagem ativo."
   },
   {
    "name": "Engulfing Lightning",
    "note": "Muita Recarga de Energia e algum ATQ%; segunda melhor quando precisa de energia."
   },
   {
    "name": "Calamity Queller",
    "note": "Muito ATQ, ajuda no dano e na cura."
   },
   {
    "name": "Fractured Halo",
    "note": "Stat stick sólido com bom Dano CRIT e ATQ%."
   },
   {
    "name": "Sacrificer's Staff",
    "note": "Melhor opção 4 estrelas, com Taxa CRIT, ATQ% e Recarga de Energia."
   },
   {
    "name": "Staff of Homa",
    "note": "Idêntica à Fractured Halo em Dano CRIT e ATQ."
   },
   {
    "name": "Deathmatch",
    "note": "Opção 4 estrelas acessível com o Passe de Batalha, mas a Taxa CRIT pode estourar."
   }
  ],
  "artifacts": [
   {
    "name": "Blizzard Strayer",
    "note": "Melhor contra inimigos que podem ser congelados; perde valor contra chefes."
   },
   {
    "name": "Golden Troupe",
    "note": "Ótimo conjunto de dano e mais consistente que o Blizzard Strayer."
   },
   {
    "name": "Scroll of the Hero of Cinder City",
    "note": "Recomendado quando ela contribui menos dano; dá 12% de Dano Elemental ao time."
   }
  ],
  "mainStats": [
   {
    "slot": "Areia",
    "value": "ATQ% (ou Recarga de Energia se necessário)"
   },
   {
    "slot": "Cálice",
    "value": "Dano Cryo ou ATQ%"
   },
   {
    "slot": "Tiara",
    "value": "Taxa CRIT ou Dano CRIT"
   }
  ],
  "substats": "Prioridade: Recarga de Energia > Taxa CRIT / Dano CRIT > ATQ%.",
  "teams": [
   {
    "name": "Freeze (Skirk)",
    "members": [
     {
      "name": "Escoffier"
     },
     {
      "name": "Skirk"
     },
     {
      "name": "Furina"
     },
     {
      "name": "Mona"
     }
    ],
    "note": "Skirk é de longe a melhor DPS Cryo para Freeze e combina bem com Escoffier."
   },
   {
    "name": "Freeze (Shenhe)",
    "members": [
     {
      "name": "Escoffier"
     },
     {
      "name": "Kamisato Ayaka"
     },
     {
      "name": "Furina"
     },
     {
      "name": "Shenhe"
     }
    ],
    "note": "Os Icy Quills da Shenhe valem para o time todo, ótimo para Ayaka trocar livremente."
   },
   {
    "name": "Freeze (Shenhe)",
    "members": [
     {
      "name": "Escoffier"
     },
     {
      "name": "Ganyu"
     },
     {
      "name": "Furina"
     },
     {
      "name": "Shenhe"
     }
    ],
    "note": "Mesma abordagem de buffs da Shenhe com Ganyu como DPS Cryo."
   }
  ]
 },
 "eula": {
  "patch": "6.0",
  "sources": [
   {
    "label": "Icy Veins: builds",
    "url": "https://www.icy-veins.com/genshin-impact/eula-guide-best-builds"
   },
   {
    "label": "Icy Veins: equipes (seção de times na página de builds)",
    "url": "https://www.icy-veins.com/genshin-impact/eula-guide-best-builds"
   }
  ],
  "weapons": [
   {
    "name": "Song of Broken Pines",
    "note": "Melhor arma: ATQ base altíssimo e Dano Físico."
   },
   {
    "name": "Beacon of the Reed Sea",
    "note": "Alternativa viável, pois Eula escala com ATQ."
   },
   {
    "name": "Wolf's Gravestone",
    "note": "Alternativa viável, pois Eula escala com ATQ."
   },
   {
    "name": "Skyward Pride",
    "note": "Alternativa viável, pois Eula escala com ATQ."
   },
   {
    "name": "Verdict",
    "note": "Alternativa viável, pois Eula escala com ATQ."
   },
   {
    "name": "The Unforged",
    "note": "Alternativa viável, pois Eula escala com ATQ."
   },
   {
    "name": "Serpent Spine",
    "note": "Opção 4 estrelas viável."
   }
  ],
  "artifacts": [
   {
    "name": "Pale Flame",
    "note": "Único conjunto recomendado; Eula mantém facilmente os 2 acúmulos de 9% de ATQ."
   },
   {
    "name": "Long Night's Oath",
    "note": "Apenas para times focados em ataques de mergulho."
   }
  ],
  "mainStats": [
   {
    "slot": "Areia",
    "value": "ATQ%"
   },
   {
    "slot": "Cálice",
    "value": "Dano Físico"
   },
   {
    "slot": "Tiara",
    "value": "Taxa CRIT ou Dano CRIT"
   }
  ],
  "substats": "Prioridade: Recarga de Energia (até o necessário) > Taxa CRIT / Dano CRIT > ATQ%.",
  "teams": [
   {
    "name": "Físico / Superconduct",
    "members": [
     {
      "name": "Eula"
     },
     {
      "name": "Raiden Shogun"
     },
     {
      "name": "Rosaria"
     },
     {
      "name": "Zhongli"
     }
    ],
    "note": "Raiden fornece o Electro para Superconduct e Rosaria adiciona dano Cryo."
   },
   {
    "name": "Cryo",
    "members": [
     {
      "name": "Eula"
     },
     {
      "name": "Escoffier"
     },
     {
      "name": "Yelan"
     },
     {
      "name": "Furina"
     }
    ],
    "note": "Escoffier carrega muito dano e reduz a RES Cryo."
   },
   {
    "name": "Físico com Furina",
    "members": [
     {
      "name": "Eula"
     },
     {
      "name": "Ineffa"
     },
     {
      "name": "Furina"
     },
     {
      "name": "Mika"
     }
    ],
    "note": "Time listado no guia sem justificativa específica."
   }
  ]
 },
 "furina": {
  "patch": "6.0",
  "sources": [
   {
    "label": "Icy Veins: builds",
    "url": "https://www.icy-veins.com/genshin-impact/furina-guide-best-builds"
   },
   {
    "label": "Icy Veins: equipes (seção de times na página de builds)",
    "url": "https://www.icy-veins.com/genshin-impact/furina-guide-best-builds"
   }
  ],
  "weapons": [
   {
    "name": "Splendor of Tranquil Waters",
    "note": "Melhor arma: aumenta a Vida e o dano da Habilidade da Furina."
   },
   {
    "name": "Festering Desire",
    "note": "Forte opção fora do gacha, distribuída gratuitamente."
   },
   {
    "name": "Fleuve Cendre Ferryman",
    "note": "Outra forte opção fora do gacha."
   },
   {
    "name": "Primordial Jade Cutter",
    "note": "Alternativa listada no guia."
   },
   {
    "name": "Key of Khaj-Nisut",
    "note": "Alternativa listada no guia."
   },
   {
    "name": "Uraku Misugiri",
    "note": "Alternativa listada no guia."
   }
  ],
  "artifacts": [
   {
    "name": "Golden Troupe",
    "note": "Melhor conjunto da Furina, com grande aumento de dano."
   },
   {
    "name": "Tenacity of the Millelith",
    "note": "Também listado como um dos melhores conjuntos."
   }
  ],
  "mainStats": [
   {
    "slot": "Areia",
    "value": "Recarga de Energia ou Vida%"
   },
   {
    "slot": "Cálice",
    "value": "Vida% ou Dano Hydro"
   },
   {
    "slot": "Tiara",
    "value": "Taxa CRIT ou Dano CRIT"
   }
  ],
  "substats": "Prioridade: Recarga de Energia (até o necessário) > Taxa CRIT / Dano CRIT > Vida% > Vida.",
  "teams": [
   {
    "name": "Neuvillette hypercarry",
    "members": [
     {
      "name": "Furina"
     },
     {
      "name": "Neuvillette"
     },
     {
      "name": "Kaedehara Kazuha"
     },
     {
      "name": "Xilonen"
     }
    ],
    "note": "Furina soma Ressonância Hydro e buffs de dano; Xilonen é a melhor curandeira aqui."
   },
   {
    "name": "Skirk + Escoffier",
    "members": [
     {
      "name": "Furina"
     },
     {
      "name": "Skirk"
     },
     {
      "name": "Escoffier"
     },
     {
      "name": "Shenhe"
     }
    ],
    "note": "Composição mais meta atual com Skirk e Escoffier."
   },
   {
    "name": "Anemo hypercarry",
    "members": [
     {
      "name": "Furina"
     },
     {
      "name": "Xiao"
     },
     {
      "name": "Faruzan"
     },
     {
      "name": "Xianyun"
     }
    ],
    "note": "Furina combina bem com Xiao; Xianyun fornece os buffs."
   }
  ]
 },
 "ganyu": {
  "patch": "Luna II",
  "sources": [
   {
    "label": "Icy Veins: builds",
    "url": "https://www.icy-veins.com/genshin-impact/ganyu-guide-best-builds"
   },
   {
    "label": "Icy Veins: equipes",
    "url": "https://www.icy-veins.com/genshin-impact/ganyu-guide-best-builds"
   }
  ],
  "weapons": [
   {
    "name": "The First Great Magic",
    "note": "Melhor opção; potencializa muito os ataques carregados da Ganyu, com ou sem outros personagens Cryo."
   },
   {
    "name": "Amos' Bow",
    "note": "Listada como alternativa pelo guia."
   },
   {
    "name": "Aqua Simulacra",
    "note": "Listada como alternativa pelo guia."
   },
   {
    "name": "Polar Star",
    "note": "Listada como alternativa pelo guia."
   },
   {
    "name": "Hunter's Path",
    "note": "Listada como alternativa pelo guia."
   },
   {
    "name": "Astral Vulture's Crimson Plumage",
    "note": "Listada como alternativa pelo guia."
   },
   {
    "name": "Prototype Crescent",
    "note": "Listada como alternativa pelo guia."
   }
  ],
  "artifacts": [
   {
    "name": "Blizzard Strayer",
    "note": "O bônus de 4 peças aumenta ATQ e Taxa CRIT, deixando as outras peças focarem em Dano CRIT."
   },
   {
    "name": "Wanderer's Troupe",
    "note": "Indicado para times de Melt; dá 80 de Proficiência Elemental e o bônus de 4 peças vale para Disparos Carregados."
   },
   {
    "name": "Marechaussee Hunter",
    "note": "Recomendado ao jogar Ganyu com Furina."
   }
  ],
  "mainStats": [
   {
    "slot": "Areia",
    "value": "ATQ%"
   },
   {
    "slot": "Cálice",
    "value": "Cryo DMG"
   },
   {
    "slot": "Tiara",
    "value": "Dano CRIT"
   }
  ],
  "substats": "Prioridade: Dano CRIT, Taxa CRIT, ATQ%, Recarga de Energia.",
  "teams": [
   {
    "name": "Freeze",
    "members": [
     {
      "name": "Ganyu"
     },
     {
      "name": "Furina"
     },
     {
      "name": "Venti"
     },
     {
      "name": "Shenhe"
     }
    ],
    "note": "Time de Freeze; Mona é listada como Hydro alternativo."
   },
   {
    "name": "Mono Cryo",
    "members": [
     {
      "name": "Ganyu"
     },
     {
      "name": "Shenhe"
     },
     {
      "name": "Rosaria"
     },
     {
      "name": "Citlali"
     }
    ],
    "note": "Time Mono Cryo; Charlotte e Mika aparecem como alternativas."
   },
   {
    "name": "Melt",
    "members": [
     {
      "name": "Ganyu"
     },
     {
      "name": "Mavuika"
     },
     {
      "name": "Bennett"
     },
     {
      "name": "Citlali"
     }
    ],
    "note": "Time de Melt com Pyro e buffs de Bennett."
   }
  ]
 },
 "hu-tao": {
  "patch": "6.0",
  "sources": [
   {
    "label": "Icy Veins: builds",
    "url": "https://www.icy-veins.com/genshin-impact/hu-tao-guide-best-builds"
   },
   {
    "label": "Icy Veins: equipes",
    "url": "https://www.icy-veins.com/genshin-impact/hu-tao-guide-best-builds"
   }
  ],
  "weapons": [
   {
    "name": "Staff of Homa",
    "note": "De longe a melhor arma para as builds dela."
   },
   {
    "name": "Staff of the Scarlet Sands",
    "note": "Dá Dano CRIT em vez de Taxa CRIT, exigindo uma Tiara diferente."
   },
   {
    "name": "Ballad of the Fjords",
    "note": "Boa lança de 4 estrelas disponível no passe de batalha."
   },
   {
    "name": "Dragon's Bane",
    "note": "Boa lança de 4 estrelas que pode ser forjada."
   },
   {
    "name": "Lumidouce Elegy",
    "note": "Listada como alternativa pelo guia."
   },
   {
    "name": "Deathmatch",
    "note": "Listada como alternativa pelo guia."
   },
   {
    "name": "Primordial Jade Winged-Spear",
    "note": "Listada como alternativa pelo guia."
   }
  ],
  "artifacts": [
   {
    "name": "Crimson Witch of Flames",
    "note": "Conjunto recomendado; vale incluir alguma Proficiência Elemental, sem ser o foco."
   },
   {
    "name": "Shimenawa's Reminiscence",
    "note": "Viável com curandeiros, como em times com Furina, pois o Burst dela dá menos sobrevivência com esse conjunto."
   }
  ],
  "mainStats": [
   {
    "slot": "Areia",
    "value": "Vida%"
   },
   {
    "slot": "Cálice",
    "value": "Pyro DMG"
   },
   {
    "slot": "Tiara",
    "value": "Taxa CRIT / Dano CRIT"
   }
  ],
  "substats": "Prioridade: Taxa CRIT / Dano CRIT, Proficiência Elemental, Vida%, ATQ%.",
  "teams": [
   {
    "name": "Double Hydro",
    "members": [
     {
      "name": "Hu Tao"
     },
     {
      "name": "Xingqiu"
     },
     {
      "name": "Furina"
     },
     {
      "name": "Citlali"
     }
    ],
    "note": "Times com Citlali ou Xilonen são as melhores composições dela atualmente."
   },
   {
    "name": "Double Hydro",
    "members": [
     {
      "name": "Hu Tao"
     },
     {
      "name": "Yelan"
     },
     {
      "name": "Furina"
     },
     {
      "name": "Citlali"
     }
    ],
    "note": "Variante com Yelan; também entre as melhores composições atuais."
   },
   {
    "name": "Plunge",
    "members": [
     {
      "name": "Hu Tao"
     },
     {
      "name": "Yelan"
     },
     {
      "name": "Furina"
     },
     {
      "name": "Xianyun"
     }
    ],
    "note": "Xianyun dá à Hu Tao um time poderoso focado em Ataques de Mergulho."
   }
  ]
 },
 "jean": {
  "patch": "Luna II",
  "sources": [
   {
    "label": "Icy Veins: builds",
    "url": "https://www.icy-veins.com/genshin-impact/jean-guide-best-builds"
   },
   {
    "label": "Icy Veins: equipes",
    "url": "https://www.icy-veins.com/genshin-impact/jean-guide-best-builds"
   }
  ],
  "weapons": [
   {
    "name": "Primordial Jade Cutter",
    "note": "Melhor opção; converte Vida em ATQ, aumentando a cura da Jean."
   },
   {
    "name": "Freedom-Sworn",
    "note": "Escolha muito boa para a build de suporte curandeira."
   },
   {
    "name": "Amenoma Kageuchi",
    "note": "Melhor opção forjável, dá ATQ e um pouco de Recarga de Energia."
   },
   {
    "name": "Mistsplitter Reforged",
    "note": "Listada como alternativa pelo guia."
   },
   {
    "name": "Skyward Blade",
    "note": "Listada como alternativa pelo guia."
   },
   {
    "name": "Aquila Favonia",
    "note": "Listada como alternativa pelo guia."
   },
   {
    "name": "Favonius Sword",
    "note": "Listada como alternativa pelo guia."
   }
  ],
  "artifacts": [
   {
    "name": "Viridescent Venerer",
    "note": "Melhor conjunto de 4 peças; aumenta o dano dela e dá redução de RES para todos."
   },
   {
    "name": "Noblesse Oblige",
    "note": "Listado entre os melhores conjuntos pelo guia."
   }
  ],
  "mainStats": [
   {
    "slot": "Areia",
    "value": "ATQ%"
   },
   {
    "slot": "Cálice",
    "value": "Anemo DMG / ATQ%"
   },
   {
    "slot": "Tiara",
    "value": "Taxa CRIT / Dano CRIT"
   }
  ],
  "substats": "Prioridade: Recarga de Energia (até o necessário), ATQ%, Taxa CRIT / Dano CRIT, Proficiência Elemental.",
  "teams": [
   {
    "name": "Furina",
    "members": [
     {
      "name": "Jean"
     },
     {
      "name": "Neuvillette"
     },
     {
      "name": "Furina"
     },
     {
      "name": "Fischl"
     }
    ],
    "note": "Os dois slots livres podem ser DPS principal e sub-DPS que se beneficiem da cura da Jean e do Hydro da Furina."
   },
   {
    "name": "Sunfire",
    "members": [
     {
      "name": "Jean"
     },
     {
      "name": "Bennett"
     },
     {
      "name": "Kamisato Ayaka"
     },
     {
      "name": "Shenhe"
     }
    ],
    "note": "Sunfire é a interação dos Bursts de Jean e Bennett, com o de Bennett primeiro."
   },
   {
    "name": "Suporte Anemo",
    "members": [
     {
      "name": "Jean"
     },
     {
      "name": "Xiao"
     },
     {
      "name": "Faruzan"
     },
     {
      "name": "Zhongli"
     }
    ],
    "note": "Jean brilha especialmente em times focados em Anemo."
   }
  ]
 },
 "kaedehara-kazuha": {
  "patch": "6.0",
  "sources": [
   {
    "label": "Icy Veins: builds",
    "url": "https://www.icy-veins.com/genshin-impact/kaedehara-kazuha-guide-best-builds"
   },
   {
    "label": "Icy Veins: equipes",
    "url": "https://www.icy-veins.com/genshin-impact/kaedehara-kazuha-guide-best-builds"
   }
  ],
  "weapons": [
   {
    "name": "Freedom-Sworn",
    "note": "Melhor opção; armas que dão Proficiência Elemental são as melhores para o Kazuha."
   },
   {
    "name": "Xiphos' Moonlight",
    "note": "Alternativa que também fornece Proficiência Elemental."
   },
   {
    "name": "Favonius Sword",
    "note": "Recomendada quando é difícil conseguir Recarga de Energia para usar o Burst."
   },
   {
    "name": "Fleuve Cendre Ferryman",
    "note": "Recomendada para o mesmo problema de Recarga de Energia."
   },
   {
    "name": "Toukabou Shigure",
    "note": "Listada como alternativa pelo guia."
   },
   {
    "name": "Iron Sting",
    "note": "Listada como alternativa pelo guia."
   },
   {
    "name": "Sapwood Blade",
    "note": "Listada como alternativa pelo guia."
   }
  ],
  "artifacts": [
   {
    "name": "Viridescent Venerer",
    "note": "De longe o melhor conjunto; permite ao Kazuha apoiar ainda mais o time."
   }
  ],
  "mainStats": [
   {
    "slot": "Areia",
    "value": "Proficiência Elemental ou Recarga de Energia"
   },
   {
    "slot": "Cálice",
    "value": "Proficiência Elemental"
   },
   {
    "slot": "Tiara",
    "value": "Proficiência Elemental"
   }
  ],
  "substats": "Prioridade: Recarga de Energia (até o necessário), Proficiência Elemental, Taxa CRIT (só com Favonius Sword), ATQ%.",
  "teams": [
   {
    "name": "Neuvillette",
    "members": [
     {
      "name": "Kaedehara Kazuha"
     },
     {
      "name": "Neuvillette"
     },
     {
      "name": "Furina"
     },
     {
      "name": "Xilonen"
     }
    ],
    "note": "Kazuha e Xilonen dão muita redução de RES, então o retorno começa a diminuir."
   },
   {
    "name": "Pyro DPS",
    "members": [
     {
      "name": "Kaedehara Kazuha"
     },
     {
      "name": "Mavuika"
     },
     {
      "name": "Bennett"
     },
     {
      "name": "Citlali"
     }
    ],
    "note": "Bennett aplica Pyro, facilitando o Swirl do Kazuha antes de trocar para o DPS principal."
   },
   {
    "name": "Freeze (Ayaka)",
    "members": [
     {
      "name": "Kaedehara Kazuha"
     },
     {
      "name": "Kamisato Ayaka"
     },
     {
      "name": "Sangonomiya Kokomi"
     },
     {
      "name": "Shenhe"
     }
    ],
    "note": "Ayaka é o DPS principal e recebe suporte enquanto congela os inimigos."
   }
  ]
 },
 "kamisato-ayaka": {
  "patch": "5.8",
  "sources": [
   {
    "label": "Icy Veins: builds",
    "url": "https://www.icy-veins.com/genshin-impact/kamisato-ayaka-guide-best-builds"
   },
   {
    "label": "Icy Veins: equipes",
    "url": "https://www.icy-veins.com/genshin-impact/kamisato-ayaka-guide-best-builds"
   }
  ],
  "weapons": [
   {
    "name": "Mistsplitter Reforged",
    "note": "De longe a melhor arma; ela usa todo o passivo e tem Dano CRIT como substat."
   },
   {
    "name": "Haran Geppaku Futsu",
    "note": "Ótima espada, embora a Taxa CRIT seja menos desejável."
   },
   {
    "name": "Absolution",
    "note": "Mesmo escalonamento da Mistsplitter e +20% de Dano CRIT, mas a segunda parte do passivo é difícil para ela."
   },
   {
    "name": "Amenoma Kageuchi",
    "note": "Uma das melhores armas de 4 estrelas, forjável, com até 55% de ATQ e bastante energia grátis."
   },
   {
    "name": "Light of Foliar Incision",
    "note": "Listada como alternativa pelo guia."
   },
   {
    "name": "Primordial Jade Cutter",
    "note": "Listada como alternativa pelo guia."
   },
   {
    "name": "Summit Shaper",
    "note": "Listada como alternativa pelo guia."
   }
  ],
  "artifacts": [
   {
    "name": "Blizzard Strayer",
    "note": "Combina com o Freeze: +20% de Taxa CRIT em alvos Cryo e +40% em alvos Congelados, por isso a Taxa CRIT é menos valorizada."
   }
  ],
  "mainStats": [
   {
    "slot": "Areia",
    "value": "ATQ%"
   },
   {
    "slot": "Cálice",
    "value": "Cryo DMG"
   },
   {
    "slot": "Tiara",
    "value": "Dano CRIT (ou ATQ%, conforme o time)"
   }
  ],
  "substats": "Prioridade: Recarga de Energia (cerca de 110% a 140%), Dano CRIT, ATQ%, Taxa CRIT, ATQ fixo.",
  "teams": [
   {
    "name": "Freeze",
    "members": [
     {
      "name": "Kamisato Ayaka"
     },
     {
      "name": "Shenhe"
     },
     {
      "name": "Kaedehara Kazuha"
     },
     {
      "name": "Sangonomiya Kokomi"
     }
    ],
    "note": "Freeze é geralmente a melhor composição da Ayaka."
   },
   {
    "name": "Orçamento",
    "members": [
     {
      "name": "Kamisato Ayaka"
     },
     {
      "name": "Xingqiu"
     },
     {
      "name": "Sucrose"
     },
     {
      "name": "Diona"
     }
    ],
    "note": "Pensado para contas novas ou com menos personagens."
   },
   {
    "name": "Mono Cryo",
    "members": [
     {
      "name": "Kamisato Ayaka"
     },
     {
      "name": "Shenhe"
     },
     {
      "name": "Kaedehara Kazuha"
     },
     {
      "name": "Diona"
     }
    ],
    "note": "Usado contra inimigos imóveis ou que não podem ser congelados."
   }
  ]
 },
 "kamisato-ayato": {
  "patch": "Luna II",
  "sources": [
   {
    "label": "Icy Veins: builds",
    "url": "https://www.icy-veins.com/genshin-impact/kamisato-ayato-guide-best-builds"
   },
   {
    "label": "Icy Veins: equipes",
    "url": "https://www.icy-veins.com/genshin-impact/kamisato-ayato-guide-best-builds"
   }
  ],
  "weapons": [
   {
    "name": "Haran Geppaku Futsu",
    "note": "Melhor opção; dá Taxa CRIT e bônus de dano elemental, e a Skill em outros aumenta o dano dos Ataques Normais."
   },
   {
    "name": "Primordial Jade Cutter",
    "note": "Forte alternativa; o passivo aumenta o ATQ com base na Vida máxima."
   },
   {
    "name": "The Black Sword",
    "note": "Melhor espada de 4 estrelas dele, com Taxa CRIT e bônus de Ataque Normal, mas só no passe de batalha."
   },
   {
    "name": "Kagotsurube Isshin",
    "note": "Melhor opção gratuita, obtida por missão."
   },
   {
    "name": "Mistsplitter Reforged",
    "note": "Listada como alternativa pelo guia."
   },
   {
    "name": "Light of Foliar Incision",
    "note": "Listada como alternativa pelo guia."
   },
   {
    "name": "Skyward Blade",
    "note": "Listada como alternativa pelo guia."
   }
  ],
  "artifacts": [
   {
    "name": "Heart of Depth",
    "note": "Melhor conjunto; forjável no Strongbox e o passivo ativa a cada uso da Skill."
   },
   {
    "name": "Marechaussee Hunter",
    "note": "Recomendado se jogar o Ayato com Furina."
   }
  ],
  "mainStats": [
   {
    "slot": "Areia",
    "value": "ATQ%"
   },
   {
    "slot": "Cálice",
    "value": "Hydro DMG"
   },
   {
    "slot": "Tiara",
    "value": "Taxa CRIT / Dano CRIT"
   }
  ],
  "substats": "Prioridade: Recarga de Energia (até o necessário), Dano CRIT / Taxa CRIT, ATQ%, Vida%.",
  "teams": [
   {
    "name": "Vaporize",
    "members": [
     {
      "name": "Kamisato Ayato"
     },
     {
      "name": "Xiangling"
     },
     {
      "name": "Bennett"
     },
     {
      "name": "Kaedehara Kazuha"
     }
    ],
    "note": "Burst do Bennett amplifica o dano, Kazuha dá Swirl e redução de RES, e um Pyro como Xiangling ou Mavuika habilita o Vaporize."
   },
   {
    "name": "Hypercarry",
    "members": [
     {
      "name": "Kamisato Ayato"
     },
     {
      "name": "Xilonen"
     },
     {
      "name": "Furina"
     },
     {
      "name": "Kaedehara Kazuha"
     }
    ],
    "note": "Time focado em buffar o Ayato, com Furina como principal buff de dano; o último slot é flexível."
   },
   {
    "name": "Hyperbloom",
    "members": [
     {
      "name": "Kamisato Ayato"
     },
     {
      "name": "Lauma"
     },
     {
      "name": "Ineffa"
     },
     {
      "name": "Furina"
     }
    ],
    "note": "Nahida é um dos melhores parceiros e recomenda-se ao menos um Electro; o último slot é flexível."
   }
  ]
 },
 "keqing": {
  "patch": "Luna II",
  "sources": [
   {
    "label": "Icy Veins: builds",
    "url": "https://www.icy-veins.com/genshin-impact/keqing-guide-best-builds"
   },
   {
    "label": "Icy Veins: equipes",
    "url": "https://www.icy-veins.com/genshin-impact/keqing-guide-best-builds"
   }
  ],
  "weapons": [
   {
    "name": "Mistsplitter Reforged",
    "note": "Melhor escolha; dá muito Dano CRIT e bônus de Ataque Normal e dano elemental (build Electro DPS)."
   },
   {
    "name": "Primordial Jade Cutter",
    "note": "Logo atrás, especialmente em times de Aggravate."
   },
   {
    "name": "Haran Geppaku Futsu",
    "note": "Listada como alternativa pelo guia."
   },
   {
    "name": "Summit Shaper",
    "note": "Listada como alternativa pelo guia."
   },
   {
    "name": "Freedom-Sworn",
    "note": "Listada como alternativa pelo guia."
   },
   {
    "name": "Azurelight",
    "note": "Listada como alternativa pelo guia."
   },
   {
    "name": "Light of Foliar Incision",
    "note": "Listada como alternativa pelo guia."
   }
  ],
  "artifacts": [
   {
    "name": "Thundering Fury",
    "note": "A Keqing aproveita bem o buff de 4 peças (build Electro DPS)."
   },
   {
    "name": "Pale Flame",
    "note": "Para a build Physical DPS, pois ela mantém o bônus de 4 peças sempre ativo."
   }
  ],
  "mainStats": [
   {
    "slot": "Areia",
    "value": "ATQ%"
   },
   {
    "slot": "Cálice",
    "value": "Electro DMG"
   },
   {
    "slot": "Tiara",
    "value": "Taxa CRIT / Dano CRIT"
   }
  ],
  "substats": "Prioridade: Taxa CRIT, Dano CRIT, ATQ%, Proficiência Elemental.",
  "teams": [
   {
    "name": "Aggravate",
    "members": [
     {
      "name": "Keqing"
     },
     {
      "name": "Fischl"
     },
     {
      "name": "Nahida"
     },
     {
      "name": "Xilonen"
     }
    ],
    "note": "Times de Aggravate são os de melhor desempenho da Keqing."
   },
   {
    "name": "Electro",
    "members": [
     {
      "name": "Keqing"
     },
     {
      "name": "Ororon"
     },
     {
      "name": "Yelan"
     },
     {
      "name": "Kaedehara Kazuha"
     }
    ],
    "note": "Manter um Anemo como Kazuha para redução de RES, com aplicadores elementais fora de campo."
   },
   {
    "name": "Físico",
    "members": [
     {
      "name": "Keqing"
     },
     {
      "name": "Rosaria"
     },
     {
      "name": "Xingqiu"
     },
     {
      "name": "Citlali"
     }
    ],
    "note": "Combina bem com Cryo, especialmente efeitos de Freeze."
   }
  ]
 },
 "kinich": {
  "patch": "6.3",
  "sources": [
   {
    "label": "Icy Veins: builds",
    "url": "https://www.icy-veins.com/genshin-impact/kinich-guide-best-builds"
   },
   {
    "label": "Icy Veins: equipes",
    "url": "https://www.icy-veins.com/genshin-impact/kinich-team-guide"
   }
  ],
  "weapons": [
   {
    "name": "Fang of the Mountain King",
    "note": "Arma exclusiva dele; dá grande bônus de dano quando ele ativa Burning."
   },
   {
    "name": "Serpent Spine",
    "note": "Dá stats CRIT e passivo de suporte, mas exige um escudeiro e a Taxa CRIT pode ser um problema."
   },
   {
    "name": "Beacon of the Reed Sea",
    "note": "O alto valor de CRIT resolve problemas de CRIT."
   },
   {
    "name": "Redhorn Stonethresher",
    "note": "Listada como opção pelo guia."
   },
   {
    "name": "Wolf's Gravestone",
    "note": "Melhor arma padrão, com muito ATQ e um passivo que adiciona mais ATQ."
   },
   {
    "name": "Verdict",
    "note": "Alto ATQ base com menos CRIT, bom porque ele costuma exceder a Taxa CRIT com Obsidian Codex."
   },
   {
    "name": "Blackcliff Slasher",
    "note": "Dá Dano CRIT sem risco de exceder a Taxa CRIT, mas o passivo é difícil de ativar."
   }
  ],
  "artifacts": [
   {
    "name": "Obsidian Codex",
    "note": "Melhor opção, feito para o kit dele; o bônus de 4 peças dá 40% de Taxa CRIT após consumir um ponto de Nightsoul."
   },
   {
    "name": "Marechaussee Hunter",
    "note": "Segunda melhor, até 36% de Taxa CRIT; ativar bem exige a Furina."
   },
   {
    "name": "Unfinished Reverie",
    "note": "Excelente para o estilo focado em Burning e boa alternativa sem o Obsidian Codex."
   }
  ],
  "mainStats": [
   {
    "slot": "Areia",
    "value": "ATQ%"
   },
   {
    "slot": "Cálice",
    "value": "Dendro DMG (depois ATQ%)"
   },
   {
    "slot": "Tiara",
    "value": "Taxa CRIT / Dano CRIT"
   }
  ],
  "substats": "Prioridade: Taxa CRIT / Dano CRIT, ATQ%, Recarga de Energia.",
  "teams": [
   {
    "name": "Pyro / Burning",
    "members": [
     {
      "name": "Kinich"
     },
     {
      "name": "Mavuika"
     },
     {
      "name": "Emilie"
     },
     {
      "name": "Bennett"
     }
    ],
    "note": "Mavuika é a melhor parceira Pyro e Emilie é um dos melhores sub-DPS para ele."
   },
   {
    "name": "Pyro / Burning",
    "members": [
     {
      "name": "Kinich"
     },
     {
      "name": "Mavuika"
     },
     {
      "name": "Lauma"
     },
     {
      "name": "Bennett"
     }
    ],
    "note": "Variante com Lauma; Bennett está entre os melhores buffers de ATQ de 4 estrelas."
   },
   {
    "name": "Pyro / Burning",
    "members": [
     {
      "name": "Kinich"
     },
     {
      "name": "Mavuika"
     },
     {
      "name": "Emilie"
     },
     {
      "name": "Iansan"
     }
    ],
    "note": "Iansan está entre os melhores buffers de ATQ de 4 estrelas."
   }
  ]
 },
 "klee": {
  "patch": "Luna II (guia atualizado em 02/12/2025)",
  "sources": [
   {
    "label": "Icy Veins: builds",
    "url": "https://www.icy-veins.com/genshin-impact/klee-guide-best-builds"
   },
   {
    "label": "Icy Veins: equipes",
    "url": "https://www.icy-veins.com/genshin-impact/klee-guide-best-builds"
   }
  ],
  "weapons": [
   {
    "name": "The Widsith",
    "note": "Melhor arma; supera a Lost Prayer to the Sacred Winds quando está em R5."
   },
   {
    "name": "Lost Prayer to the Sacred Winds",
    "note": "Alternativa se você não tem a Widsith em R5; a velocidade de movimento ajuda a Klee."
   },
   {
    "name": "Tome of the Eternal Flow",
    "note": "Alternativa listada pelo guia."
   },
   {
    "name": "Surf's Up",
    "note": "Alternativa listada pelo guia."
   },
   {
    "name": "Cashflow Supervision",
    "note": "Alternativa listada pelo guia."
   },
   {
    "name": "Kagura's Verity",
    "note": "Alternativa listada pelo guia."
   },
   {
    "name": "Tulaytullah's Remembrance",
    "note": "Alternativa listada pelo guia."
   }
  ],
  "artifacts": [
   {
    "name": "Marechaussee Hunter",
    "note": "Melhor conjunto quando a Klee joga com a Furina, mas prende você a ela."
   },
   {
    "name": "Crimson Witch of Flames",
    "note": "Ideal para equipes de Vaporizar, Sobrecarga ou Queimar."
   },
   {
    "name": "Lavawalker's Resolve",
    "note": "Melhor em equipes Mono-Pyro."
   }
  ],
  "mainStats": [
   {
    "slot": "Areia",
    "value": "ATQ%"
   },
   {
    "slot": "Cálice",
    "value": "Pyro DMG"
   },
   {
    "slot": "Tiara",
    "value": "Taxa CRIT / Dano CRIT"
   }
  ],
  "substats": "Prioridade: Recarga de Energia (cerca de 140%), Taxa CRIT / Dano CRIT, ATQ% e Proficiência Elemental apenas em equipes de reação.",
  "teams": [
   {
    "name": "Mono-Pyro",
    "members": [
     {
      "name": "Klee"
     },
     {
      "name": "Bennett"
     },
     {
      "name": "Mavuika"
     },
     {
      "name": "Xilonen"
     }
    ],
    "note": "Bennett é o melhor suporte; Xilonen traz redução de RES e cura."
   },
   {
    "name": "Mono-Pyro",
    "members": [
     {
      "name": "Klee"
     },
     {
      "name": "Bennett"
     },
     {
      "name": "Mavuika"
     },
     {
      "name": "Lan Yan"
     }
    ],
    "note": "Lan Yan entra como opção de escudo para mais segurança."
   },
   {
    "name": "Mono-Pyro",
    "members": [
     {
      "name": "Klee"
     },
     {
      "name": "Bennett"
     },
     {
      "name": "Xiangling"
     },
     {
      "name": "Thoma"
     }
    ],
    "note": "Thoma entra como opção de escudo para mais segurança."
   }
  ]
 },
 "lyney": {
  "patch": "6.5 (revisado em 20/04/2026)",
  "sources": [
   {
    "label": "Icy Veins: builds",
    "url": "https://www.icy-veins.com/genshin-impact/lyney-guide-best-builds"
   },
   {
    "label": "Icy Veins: equipes",
    "url": "https://www.icy-veins.com/genshin-impact/lyney-team-guide"
   }
  ],
  "weapons": [
   {
    "name": "The First Great Magic",
    "note": "Arma exclusiva e a melhor; muito Dano CRIT e escala com outros personagens Pyro."
   },
   {
    "name": "Astral Vulture's Crimson Plumage",
    "note": "Alternativa fenomenal e ótimo 'stat stick'; buffs ligados a Redemoinho."
   },
   {
    "name": "Aqua Simulacra",
    "note": "Arco universalmente forte, com alto Dano CRIT e bônus de dano com inimigos próximos."
   },
   {
    "name": "Song of Stillness",
    "note": "Opção craftável gratuita; a cura frequente do Lyney ativa o passivo."
   },
   {
    "name": "Prototype Crescent",
    "note": "Craftável sólida, mas depende de acertar pontos fracos."
   }
  ],
  "artifacts": [
   {
    "name": "Marechaussee Hunter",
    "note": "De longe o melhor conjunto; a variação de Vida mantém os 3 acúmulos de Taxa CRIT."
   },
   {
    "name": "Lavawalker's Resolve",
    "note": "Alternativa viável na equipe Mono-Pyro padrão."
   }
  ],
  "mainStats": [
   {
    "slot": "Areia",
    "value": "ATQ%"
   },
   {
    "slot": "Cálice",
    "value": "Pyro DMG"
   },
   {
    "slot": "Tiara",
    "value": "Dano CRIT"
   }
  ],
  "substats": "Prioridade: Taxa CRIT e Dano CRIT, depois ATQ% e Recarga de Energia.",
  "teams": [
   {
    "name": "Mono-Pyro",
    "members": [
     {
      "name": "Lyney"
     },
     {
      "name": "Nicole"
     },
     {
      "name": "Durin"
     },
     {
      "name": "Albedo"
     }
    ],
    "note": "Nicole dá buff de ATQ e sustento; Durin é suporte off-field; Albedo é ótimo em equipes Hexerei."
   },
   {
    "name": "Mono-Pyro",
    "members": [
     {
      "name": "Lyney"
     },
     {
      "name": "Kaedehara Kazuha"
     },
     {
      "name": "Mavuika"
     },
     {
      "name": "Bennett"
     }
    ],
    "note": "Kazuha dá redução de RES e bônus de dano; Bennett dá buff de ATQ."
   },
   {
    "name": "Mono-Pyro",
    "members": [
     {
      "name": "Lyney"
     },
     {
      "name": "Zhongli"
     },
     {
      "name": "Durin"
     },
     {
      "name": "Albedo"
     }
    ],
    "note": "Mesma base de Durin e Albedo, com Zhongli no lugar de Nicole."
   }
  ]
 },
 "mavuika": {
  "patch": "6.3 (atualizado em 13/02/2026)",
  "sources": [
   {
    "label": "Icy Veins: builds",
    "url": "https://www.icy-veins.com/genshin-impact/mavuika-guide-best-builds"
   },
   {
    "label": "Icy Veins: equipes",
    "url": "https://www.icy-veins.com/genshin-impact/mavuika-team-guide"
   }
  ],
  "weapons": [
   {
    "name": "A Thousand Blazing Suns",
    "note": "Arma exclusiva e a melhor, com grande aumento de DPS."
   },
   {
    "name": "Serpent Spine",
    "note": "Uma das opções 4 estrelas mais fortes, com alto CRIT e escala consistente."
   },
   {
    "name": "Verdict",
    "note": "5 estrelas forte, com alto ATQ base e bônus de dano confiáveis."
   },
   {
    "name": "Beacon of the Reed Sea",
    "note": "Opção sólida focada em CRIT para builds agressivas."
   },
   {
    "name": "Wolf's Gravestone",
    "note": "5 estrelas estável com alto ATQ base e buff de ATQ para a equipe."
   },
   {
    "name": "The Unforged",
    "note": "Vai bem em equipes com escudo e tem boa escala de ATQ."
   },
   {
    "name": "Redhorn Stonethresher",
    "note": "Opção de Dano CRIT razoável, mas não otimizada para o kit dela."
   }
  ],
  "artifacts": [
   {
    "name": "Obsidian Codex",
    "note": "Melhor para DPS principal; o conjunto de 4 dá grande Taxa CRIT ao consumir pontos Nightsoul."
   },
   {
    "name": "Marechaussee Hunter",
    "note": "Segundo melhor, até 36% de Taxa CRIT, mas exige Furina ou variação de Vida constante."
   },
   {
    "name": "Scroll of the Hero of Cinder City",
    "note": "Melhor conjunto para suporte/sub-DPS; até 40% de bônus de dano ao DPS ativo após reações."
   }
  ],
  "mainStats": [
   {
    "slot": "Areia",
    "value": "Proficiência Elemental > ATQ%"
   },
   {
    "slot": "Cálice",
    "value": "Pyro DMG > ATQ%"
   },
   {
    "slot": "Tiara",
    "value": "Dano CRIT"
   }
  ],
  "substats": "Prioridade: Taxa CRIT / Dano CRIT > Proficiência Elemental > ATQ%.",
  "teams": [
   {
    "name": "Melt",
    "members": [
     {
      "name": "Mavuika"
     },
     {
      "name": "Xilonen"
     },
     {
      "name": "Bennett"
     },
     {
      "name": "Citlali"
     }
    ],
    "note": "Citlali é um dos melhores parceiros: gera Fighting Spirit, escudo e aplica Cryo."
   },
   {
    "name": "Melt",
    "members": [
     {
      "name": "Mavuika"
     },
     {
      "name": "Xilonen"
     },
     {
      "name": "Citlali"
     },
     {
      "name": "Escoffier"
     }
    ],
    "note": "Mesmos papéis de Xilonen e Citlali, com Escoffier no lugar de Bennett."
   },
   {
    "name": "Melt",
    "members": [
     {
      "name": "Mavuika"
     },
     {
      "name": "Iansan"
     },
     {
      "name": "Citlali"
     },
     {
      "name": "Bennett"
     }
    ],
    "note": "Iansan é uma excelente alternativa 4 estrelas, podendo rivalizar com Xilonen em C6."
   }
  ]
 },
 "mona": {
  "patch": "6.7 (revisado em 06/08/2026)",
  "sources": [
   {
    "label": "Icy Veins: builds",
    "url": "https://www.icy-veins.com/genshin-impact/mona-guide-best-builds"
   },
   {
    "label": "Icy Veins: equipes",
    "url": "https://www.icy-veins.com/genshin-impact/mona-team-guide"
   }
  ],
  "weapons": [
   {
    "name": "Thrilling Tales of Dragon Slayers",
    "note": "Melhor arma para apoiar um DPS principal; dá buff de ATQ a quem entra após a Mona."
   },
   {
    "name": "Prototype Amber",
    "note": "Ótima alternativa sem curandeiro; cura a equipe e recupera Energia ao usar o Burst."
   },
   {
    "name": "Blackcliff Agate",
    "note": "Dá mais atributos ofensivos e ATQ ao derrotar inimigos."
   }
  ],
  "artifacts": [
   {
    "name": "Celestial Gift",
    "note": "Melhor conjunto, até 40% de bônus de dano para a equipe; ideal com DPS que não escalam com ATQ, como a Mualani."
   },
   {
    "name": "Noblesse Oblige",
    "note": "Conjunto de suporte fenomenal; o buff de ATQ combina com o Burst dela."
   },
   {
    "name": "Tenacity of the Millelith",
    "note": "Boa alternativa se outro membro já usa Noblesse; ativa mesmo com ela fora de campo."
   }
  ],
  "mainStats": [
   {
    "slot": "Areia",
    "value": "Recarga de Energia"
   },
   {
    "slot": "Cálice",
    "value": "ATQ%"
   },
   {
    "slot": "Tiara",
    "value": "Taxa CRIT / Dano CRIT"
   }
  ],
  "substats": "Prioridade: Recarga de Energia primeiro (250%+ no total), depois Taxa CRIT e Dano CRIT.",
  "teams": [
   {
    "name": "Vaporize",
    "members": [
     {
      "name": "Mona"
     },
     {
      "name": "Mualani"
     },
     {
      "name": "Sucrose"
     },
     {
      "name": "Mavuika"
     }
    ],
    "note": "Mualani e Mavuika sincronizam com a janela de Omen da Mona; Sucrose é suporte Hexerei."
   },
   {
    "name": "Vaporize",
    "members": [
     {
      "name": "Mona"
     },
     {
      "name": "Albedo"
     },
     {
      "name": "Mualani"
     },
     {
      "name": "Mavuika"
     }
    ],
    "note": "Mona com um suporte Hexerei como Albedo forma um núcleo muito forte."
   },
   {
    "name": "Vaporize",
    "members": [
     {
      "name": "Mona"
     },
     {
      "name": "Durin"
     },
     {
      "name": "Mualani"
     },
     {
      "name": "Xilonen"
     }
    ],
    "note": "Durin é suporte Hexerei que combina com a Mona."
   }
  ]
 },
 "mualani": {
  "patch": "6.0 (atualizado em 27/09/2025)",
  "sources": [
   {
    "label": "Icy Veins: builds",
    "url": "https://www.icy-veins.com/genshin-impact/mualani-guide-best-builds"
   },
   {
    "label": "Icy Veins: equipes",
    "url": "https://www.icy-veins.com/genshin-impact/mualani-guide-best-builds"
   }
  ],
  "weapons": [
   {
    "name": "Surf's Up",
    "note": "Melhor arma; aumenta Vida, Dano CRIT e dano de Ataque Normal."
   },
   {
    "name": "Tome of the Eternal Flow",
    "note": "Ótima opção logo após a Surf's Up."
   },
   {
    "name": "The Widsith",
    "note": "Também listada como ótima opção."
   },
   {
    "name": "Sacrificial Jade",
    "note": "Muito dano, mas passa de 100% de Taxa CRIT, o que dificulta a build."
   },
   {
    "name": "A Thousand Floating Dreams",
    "note": "Alternativa listada pelo guia, sem ordem definida."
   },
   {
    "name": "Starcaller's Watch",
    "note": "Alternativa listada pelo guia, sem ordem definida."
   },
   {
    "name": "Sunny Morning Sleep-In",
    "note": "Alternativa listada pelo guia, sem ordem definida."
   }
  ],
  "artifacts": [
   {
    "name": "Obsidian Codex",
    "note": "De longe o melhor conjunto; é o que se deve construir em torno."
   },
   {
    "name": "Marechaussee Hunter",
    "note": "Segunda melhor opção, mas exige a Furina na equipe."
   },
   {
    "name": "Unfinished Reverie",
    "note": "Boa opção, mas exige que haja Queimar ocorrendo."
   }
  ],
  "mainStats": [
   {
    "slot": "Areia",
    "value": "Vida%"
   },
   {
    "slot": "Cálice",
    "value": "Hydro DMG / Vida%"
   },
   {
    "slot": "Tiara",
    "value": "Taxa CRIT / Dano CRIT / Vida%"
   }
  ],
  "substats": "Prioridade: Dano CRIT > Taxa CRIT > Vida% > Proficiência Elemental (priorize Dano CRIT, pois ela já tem muita Taxa CRIT).",
  "teams": [
   {
    "name": "Vaporize",
    "members": [
     {
      "name": "Mualani"
     },
     {
      "name": "Mavuika"
     },
     {
      "name": "Xilonen"
     },
     {
      "name": "Citlali"
     }
    ],
    "note": "Mavuika é ótima DPS off-field e aplicadora de Pyro."
   },
   {
    "name": "Vaporize",
    "members": [
     {
      "name": "Mualani"
     },
     {
      "name": "Mavuika"
     },
     {
      "name": "Mona"
     },
     {
      "name": "Xilonen"
     }
    ],
    "note": "Variante com Mona; o guia lista Xilonen e/ou Sucrose no último slot."
   },
   {
    "name": "Burning",
    "members": [
     {
      "name": "Mualani"
     },
     {
      "name": "Emilie"
     },
     {
      "name": "Sucrose"
     },
     {
      "name": "Dehya"
     }
    ],
    "note": "Dehya é o Pyro, Emilie habilita Queimar e Sucrose dá redução de RES; Nahida pode substituir."
   }
  ]
 },
 "nahida": {
  "patch": "6.0 (atualizado em 27/09/2025)",
  "sources": [
   {
    "label": "Icy Veins: builds",
    "url": "https://www.icy-veins.com/genshin-impact/nahida-guide-best-builds"
   },
   {
    "label": "Icy Veins: equipes",
    "url": "https://www.icy-veins.com/genshin-impact/nahida-guide-best-builds"
   }
  ],
  "weapons": [
   {
    "name": "A Thousand Floating Dreams",
    "note": "Arma exclusiva e a melhor; construa a Nahida em torno dela."
   },
   {
    "name": "Sunny Morning Sleep-In",
    "note": "Alternativa 4 estrelas bem competitiva, sem ordem definida no guia."
   },
   {
    "name": "Kagura's Verity",
    "note": "Alternativa listada pelo guia, sem ordem definida."
   },
   {
    "name": "Sacrificial Fragments",
    "note": "Alternativa 4 estrelas competitiva, sem ordem definida."
   },
   {
    "name": "Etherlight Spindlelute",
    "note": "Alternativa listada pelo guia, sem ordem definida."
   },
   {
    "name": "Wandering Evenstar",
    "note": "Alternativa listada pelo guia, sem ordem definida."
   },
   {
    "name": "The Widsith",
    "note": "Alternativa listada pelo guia, sem ordem definida."
   }
  ],
  "artifacts": [
   {
    "name": "Deepwood Memories",
    "note": "Melhor conjunto; basta um membro da equipe usá-lo."
   },
   {
    "name": "Gilded Dreams",
    "note": "Ótima opção se não quiser tirar o Deepwood de outros personagens."
   }
  ],
  "mainStats": [
   {
    "slot": "Areia",
    "value": "Proficiência Elemental"
   },
   {
    "slot": "Cálice",
    "value": "Proficiência Elemental ou Dendro DMG"
   },
   {
    "slot": "Tiara",
    "value": "Proficiência Elemental ou Taxa CRIT / Dano CRIT"
   }
  ],
  "substats": "Prioridade: Recarga de Energia até o necessário, depois 1000 de Proficiência Elemental, Taxa CRIT / Dano CRIT e mais Proficiência Elemental.",
  "teams": [
   {
    "name": "Bloom",
    "members": [
     {
      "name": "Nahida"
     },
     {
      "name": "Nilou"
     },
     {
      "name": "Lauma"
     },
     {
      "name": "Sangonomiya Kokomi"
     }
    ],
    "note": "A Nilou ativa os Bountiful Cores da Nahida muito rápido; a Lauma tornou esta uma das melhores equipes."
   },
   {
    "name": "Hyperbloom",
    "members": [
     {
      "name": "Nahida"
     },
     {
      "name": "Lauma"
     },
     {
      "name": "Xingqiu"
     },
     {
      "name": "Kuki Shinobu"
     }
    ],
    "note": "O guia prefere a Kuki Shinobu como Electro, construída com Proficiência Elemental."
   },
   {
    "name": "Quickbloom",
    "members": [
     {
      "name": "Nahida"
     },
     {
      "name": "Cyno"
     },
     {
      "name": "Furina"
     },
     {
      "name": "Baizhu"
     }
    ],
    "note": "A Nahida funciona bem como sub-DPS, permitindo muito dano dos personagens Electro como o Cyno."
   }
  ]
 },
 "navia": {
  "patch": "6.5 (revisado em 20/04/2026)",
  "sources": [
   {
    "label": "Icy Veins: builds",
    "url": "https://www.icy-veins.com/genshin-impact/navia-guide-best-builds"
   },
   {
    "label": "Icy Veins: equipes",
    "url": "https://www.icy-veins.com/genshin-impact/navia-team-guide"
   }
  ],
  "weapons": [
   {
    "name": "Verdict",
    "note": "Arma exclusiva e a melhor; o passivo ativa fácil com os fragmentos de Cristalizar."
   },
   {
    "name": "Serpent Spine",
    "note": "Segunda melhor opção; compete com 5 estrelas, mas demora a acumular."
   },
   {
    "name": "Beacon of the Reed Sea",
    "note": "Fantástico 'stat stick', logo abaixo da Serpent Spine; rara, de banner limitado."
   },
   {
    "name": "Ultimate Overlord's Mega Magic Sword",
    "note": "Incrível opção gratuita de evento, com Recarga de Energia e bônus de ATQ%."
   }
  ],
  "artifacts": [
   {
    "name": "Nighttime Whispers in the Echoing Woods",
    "note": "Geralmente o melhor conjunto; bônus de Geo DMG após a Habilidade, mais forte com escudo de Cristalizar."
   },
   {
    "name": "Marechaussee Hunter",
    "note": "Segundo lugar próximo, apenas com a Furina na equipe."
   }
  ],
  "mainStats": [
   {
    "slot": "Areia",
    "value": "ATQ% / Recarga de Energia"
   },
   {
    "slot": "Cálice",
    "value": "Geo DMG"
   },
   {
    "slot": "Tiara",
    "value": "Taxa CRIT / Dano CRIT"
   }
  ],
  "substats": "Prioridade: Recarga de Energia (até o necessário, cerca de 140% com suporte Geo) > Taxa CRIT / Dano CRIT > ATQ%.",
  "teams": [
   {
    "name": "Pyro (Hexerei)",
    "members": [
     {
      "name": "Navia"
     },
     {
      "name": "Nicole"
     },
     {
      "name": "Durin"
     },
     {
      "name": "Xilonen"
     }
    ],
    "note": "Nicole e Durin ativam o efeito Hexerei, com ATQ pessoal e redução de RES para a Navia."
   },
   {
    "name": "Pyro",
    "members": [
     {
      "name": "Navia"
     },
     {
      "name": "Mavuika"
     },
     {
      "name": "Xilonen"
     },
     {
      "name": "Bennett"
     }
    ],
    "note": "Mavuika com o Scroll of the Hero of Cinder City dá 40% de bônus de dano; Bennett é curandeiro e buffer."
   },
   {
    "name": "Pyro",
    "members": [
     {
      "name": "Navia"
     },
     {
      "name": "Xiangling"
     },
     {
      "name": "Bennett"
     },
     {
      "name": "Xilonen"
     }
    ],
    "note": "O guia só lista a composição, compartilhando Bennett e Xilonen com a equipe anterior."
   }
  ]
 },
 "neuvillette": {
  "patch": "não informado no guia (atualizado em 13/01/2026)",
  "sources": [
   {
    "label": "Icy Veins: builds",
    "url": "https://www.icy-veins.com/genshin-impact/neuvillette-guide-best-builds"
   },
   {
    "label": "Icy Veins: equipes",
    "url": "https://www.icy-veins.com/genshin-impact/neuvillette-guide-best-builds"
   }
  ],
  "weapons": [
   {
    "name": "Tome of the Eternal Flow",
    "note": "Arma indicada como a melhor (BiS) pelo guia."
   },
   {
    "name": "Sacrificial Jade",
    "note": "Alternativa listada pelo guia."
   },
   {
    "name": "Lost Prayer to the Sacred Winds",
    "note": "Alternativa listada pelo guia."
   },
   {
    "name": "Prototype Amber",
    "note": "Alternativa listada pelo guia."
   }
  ],
  "artifacts": [
   {
    "name": "Marechaussee Hunter",
    "note": "Primeiro conjunto recomendado pelo guia."
   },
   {
    "name": "Wanderer's Troupe",
    "note": "Segundo conjunto recomendado pelo guia."
   },
   {
    "name": "Heart of Depth",
    "note": "Terceiro conjunto recomendado pelo guia."
   }
  ],
  "mainStats": [
   {
    "slot": "Areia",
    "value": "Vida%"
   },
   {
    "slot": "Cálice",
    "value": "Hydro DMG"
   },
   {
    "slot": "Tiara",
    "value": "Taxa CRIT ou Dano CRIT"
   }
  ],
  "substats": "Prioridade: Vida% > Taxa CRIT > Dano CRIT > Recarga de Energia (cerca de 160% na maioria das equipes), pois o Ataque Carregado usa a Vida atual.",
  "teams": [
   {
    "name": "Hypercarry",
    "members": [
     {
      "name": "Neuvillette"
     },
     {
      "name": "Fischl"
     },
     {
      "name": "Kaedehara Kazuha"
     },
     {
      "name": "Zhongli"
     }
    ],
    "note": "Fischl dá DPS off-field, Zhongli dá redução de RES e resistência a interrupção, Kazuha reduz RES Hydro."
   },
   {
    "name": "Hypercarry",
    "members": [
     {
      "name": "Neuvillette"
     },
     {
      "name": "Furina"
     },
     {
      "name": "Kaedehara Kazuha"
     },
     {
      "name": "Baizhu"
     }
    ],
    "note": "Furina e um curandeiro geram Fanfare; Baizhu é a melhor escolha por causa das reações de Bloom."
   },
   {
    "name": "Hypercarry",
    "members": [
     {
      "name": "Neuvillette"
     },
     {
      "name": "Kaedehara Kazuha"
     },
     {
      "name": "Furina"
     },
     {
      "name": "Xilonen"
     }
    ],
    "note": "Xilonen cura e reduz RES, mas a equipe fica mais vulnerável a interrupções."
   }
  ]
 },
 "nilou": {
  "patch": "7.1",
  "sources": [
   {
    "label": "Icy Veins: builds",
    "url": "https://www.icy-veins.com/genshin-impact/nilou-guide-best-builds"
   },
   {
    "label": "Icy Veins: equipes",
    "url": "https://www.icy-veins.com/genshin-impact/nilou-team-guide"
   }
  ],
  "weapons": [
   {
    "name": "Key of Khaj-Nisut",
    "note": "Melhor opção: dá mais Vida e aumenta a Proficiência Elemental dela e do grupo com base na Vida."
   },
   {
    "name": "Serenity's Call",
    "note": "Segunda melhor, principalmente com dois personagens de Nod-Krai; concede Vida após reações."
   },
   {
    "name": "The Dockhand's Assistant",
    "note": "Única espada de 4 estrelas com Vida como substat; pode dar Proficiência Elemental e Energia."
   },
   {
    "name": "Xiphos' Moonlight",
    "note": "Converte Proficiência Elemental em Recarga de Energia para ela e o grupo."
   }
  ],
  "artifacts": [
   {
    "name": "Vourukasha's Glow",
    "note": "Mistura 2+2 com Tenacity of the Millelith maximiza a Vida e aumenta o dano de Perícia e Supremo."
   },
   {
    "name": "Tenacity of the Millelith",
    "note": "Parte da mistura 2+2 de Vida, aumentando o ATQ do grupo."
   },
   {
    "name": "Silken Moon's Serenade",
    "note": "Para equipes Lunar-Bloom com Columbina ou Lauma; dá Recarga de Energia e buffs lunares."
   }
  ],
  "mainStats": [
   {
    "slot": "Areia",
    "value": "Vida%"
   },
   {
    "slot": "Cálice",
    "value": "Vida%"
   },
   {
    "slot": "Tiara",
    "value": "Vida%"
   }
  ],
  "substats": "Prioridade: Vida% (até o limite de 74.444 de Vida) > Proficiência Elemental > Recarga de Energia.",
  "teams": [
   {
    "name": "Lunar-Bloom",
    "members": [
     {
      "name": "Nilou"
     },
     {
      "name": "Columbina"
     },
     {
      "name": "Lauma"
     },
     {
      "name": "Nahida"
     }
    ],
    "note": "Columbina habilita Lunar-Bloom e Nahida adiciona Dendro e Proficiência Elemental fora de campo."
   },
   {
    "name": "Lunar-Bloom com cura",
    "members": [
     {
      "name": "Nilou"
     },
     {
      "name": "Columbina"
     },
     {
      "name": "Lauma"
     },
     {
      "name": "Baizhu"
     }
    ],
    "note": "Baizhu cura o grupo todo, importante pois os Núcleos Generosos causam dano ao personagem ativo."
   },
   {
    "name": "Bloom",
    "members": [
     {
      "name": "Nilou"
     },
     {
      "name": "Sangonomiya Kokomi"
     },
     {
      "name": "Nahida"
     },
     {
      "name": "Collei"
     }
    ],
    "note": "Kokomi traz Hydro e cura, Nahida aplica Dendro e Collei é uma ótima opção de 4 estrelas."
   }
  ]
 },
 "qiqi": {
  "patch": "7.0",
  "sources": [
   {
    "label": "Icy Veins: builds",
    "url": "https://www.icy-veins.com/genshin-impact/qiqi-guide-best-builds"
   },
   {
    "label": "Icy Veins: equipes",
    "url": "https://www.icy-veins.com/genshin-impact/qiqi-team-guide"
   }
  ],
  "weapons": [
   {
    "name": "Key of Khaj-Nisut",
    "note": "O bônus de Vida permite um grande buff de Proficiência Elemental ao grupo, aumentando reações Stellar."
   },
   {
    "name": "Freedom-Sworn",
    "note": "Dá ATQ% e dano de Ataque Normal/Carregado, mas exige reações Electro e não aumenta reações Stellar."
   },
   {
    "name": "Sacrificial Sword",
    "note": "Reinicia a recarga da Perícia, permitindo usá-la duas vezes por rotação e manter Cryo e cura."
   },
   {
    "name": "Favonius Sword",
    "note": "Melhor opção de 4 estrelas quando Sacrificial Sword não é necessária; gera Energia extra."
   }
  ],
  "artifacts": [
   {
    "name": "Tenacity of the Millelith",
    "note": "Melhor set geral; a Perícia frequente mantém o buff de ATQ e escudo."
   },
   {
    "name": "Noblesse Oblige",
    "note": "Boa alternativa se outro personagem já usa Tenacity, mas exige usar o Supremo toda rotação."
   },
   {
    "name": "Instructor",
    "note": "Opção de 4 estrelas quando outro personagem usa Tenacity; Qiqi fica com status e cura menores."
   }
  ],
  "mainStats": [
   {
    "slot": "Areia",
    "value": "ATQ% ou Recarga de Energia"
   },
   {
    "slot": "Cálice",
    "value": "ATQ%"
   },
   {
    "slot": "Tiara",
    "value": "Taxa CRIT, Bônus de Cura ou ATQ%"
   }
  ],
  "substats": "Prioridade: Taxa CRIT > ATQ% > Recarga de Energia.",
  "teams": [
   {
    "name": "Stellar-Conduct",
    "members": [
     {
      "name": "Qiqi"
     },
     {
      "name": "Sandrone"
     },
     {
      "name": "Yae Miko"
     },
     {
      "name": "Odette"
     }
    ],
    "note": "Sandrone é a DPS de Stellar-Conduct, Yae Miko dá dano fora de campo e Odette habilita e potencializa as reações."
   },
   {
    "name": "Stellar-Conduct com Sucrose",
    "members": [
     {
      "name": "Qiqi"
     },
     {
      "name": "Sandrone"
     },
     {
      "name": "Yae Miko"
     },
     {
      "name": "Sucrose"
     }
    ],
    "note": "Mesmo núcleo, com a Proficiência Elemental de Sucrose aumentando o dano do grupo."
   },
   {
    "name": "Stellar-Conduct com Cyno",
    "members": [
     {
      "name": "Qiqi"
     },
     {
      "name": "Odette"
     },
     {
      "name": "Cyno"
     },
     {
      "name": "Yae Miko"
     }
    ],
    "note": "Cyno é DPS Electro que não habilita a reação sozinho, então Odette e Yae Miko cobrem esse papel."
   }
  ]
 },
 "raiden-shogun": {
  "patch": "6.7",
  "sources": [
   {
    "label": "Icy Veins: builds",
    "url": "https://www.icy-veins.com/genshin-impact/raiden-shogun-guide-best-builds"
   },
   {
    "label": "Icy Veins: equipes",
    "url": "https://www.icy-veins.com/genshin-impact/raiden-shogun-team-guide"
   }
  ],
  "weapons": [
   {
    "name": "Engulfing Lightning",
    "note": "Arma exclusiva e melhor opção; a Recarga de Energia vira ATQ."
   },
   {
    "name": "Staff of Homa",
    "note": "Ótimo CRIT DMG e bônus de ATQ como arma de status."
   },
   {
    "name": "Primordial Jade Winged-Spear",
    "note": "Taxa CRIT facilita a build e o ATQ acumulado é fácil de manter no Supremo."
   },
   {
    "name": "Skyward Spine",
    "note": "Recarga de Energia, Taxa CRIT e velocidade de ataque ajudam no Supremo."
   },
   {
    "name": "Deathmatch",
    "note": "Opção de 4 estrelas com Taxa CRIT que facilita um CRIT equilibrado."
   },
   {
    "name": "Wavebreaker's Fin",
    "note": "Forte em equipes com alto custo total de Supremo."
   },
   {
    "name": "The Catch",
    "note": "Melhor opção gratuita, com Recarga de Energia e dano de Supremo."
   }
  ],
  "artifacts": [
   {
    "name": "Emblem of Severed Fate",
    "note": "Melhor set para DPS principal; converte Recarga de Energia em dano de Supremo."
   },
   {
    "name": "Flower of Paradise Lost",
    "note": "Melhor set para Hyperbloom, aumentando dano de Bloom e Hyperbloom."
   }
  ],
  "mainStats": [
   {
    "slot": "Areia",
    "value": "Recarga de Energia ou ATQ% (Hyperbloom: Proficiência Elemental)"
   },
   {
    "slot": "Cálice",
    "value": "Electro DMG ou ATQ% (Hyperbloom: Proficiência Elemental)"
   },
   {
    "slot": "Tiara",
    "value": "Taxa CRIT ou Dano CRIT (Hyperbloom: Proficiência Elemental)"
   }
  ],
  "substats": "Prioridade: Taxa CRIT/Dano CRIT > ATQ% = Recarga de Energia > ATQ, com proporção ideal de 1:2 entre Taxa e Dano CRIT.",
  "teams": [
   {
    "name": "Hypercarry",
    "members": [
     {
      "name": "Raiden Shogun"
     },
     {
      "name": "Kujou Sara"
     },
     {
      "name": "Bennett"
     },
     {
      "name": "Kaedehara Kazuha"
     }
    ],
    "note": "Sara dá grande ATQ e Dano CRIT, Bennett ATQ e cura, Kazuha reduz RES e aumenta dano elemental."
   },
   {
    "name": "Hypercarry com Furina",
    "members": [
     {
      "name": "Raiden Shogun"
     },
     {
      "name": "Furina"
     },
     {
      "name": "Bennett"
     },
     {
      "name": "Kaedehara Kazuha"
     }
    ],
    "note": "Furina adiciona bônus de dano para o grupo e Hydro fora de campo."
   },
   {
    "name": "Hyperbloom",
    "members": [
     {
      "name": "Raiden Shogun"
     },
     {
      "name": "Nahida"
     },
     {
      "name": "Yelan"
     },
     {
      "name": "Baizhu"
     }
    ],
    "note": "Raiden aplica Electro fora de campo e Nahida é a melhor aplicadora de Dendro para Hyperbloom."
   }
  ]
 },
 "sangonomiya-kokomi": {
  "patch": "6.1",
  "sources": [
   {
    "label": "Icy Veins: builds",
    "url": "https://www.icy-veins.com/genshin-impact/sangonomiya-kokomi-guide-best-builds"
   },
   {
    "label": "Genshin-Builds: equipes (Icy Veins team guide indisponivel)",
    "url": "https://genshin-builds.com/en/teams/sangonomiya_kokomi"
   }
  ],
  "weapons": [
   {
    "name": "Everlasting Moonglow",
    "note": "Melhor opção para build DPS; arma exclusiva e o Supremo dela escala com a Vida máxima."
   },
   {
    "name": "Prototype Amber",
    "note": "Segunda opção listada para a build DPS."
   },
   {
    "name": "Hakushin Ring",
    "note": "Útil em equipes Electro, como taser."
   },
   {
    "name": "Waveriding Whirl",
    "note": "Boa em equipes Hydro."
   },
   {
    "name": "Thrilling Tales of Dragon Slayers",
    "note": "Alternativa listada para a build DPS."
   },
   {
    "name": "Ballad of the Boundless Blue",
    "note": "Alternativa listada para a build DPS."
   }
  ],
  "artifacts": [
   {
    "name": "Ocean-Hued Clam",
    "note": "Aumenta o dano da equipe através da cura."
   },
   {
    "name": "Heart of Depth",
    "note": "Segunda melhor opção na build DPS."
   }
  ],
  "mainStats": [
   {
    "slot": "Areia",
    "value": "Vida% ou Recarga de Energia"
   },
   {
    "slot": "Cálice",
    "value": "Hydro DMG"
   },
   {
    "slot": "Tiara",
    "value": "Bônus de Cura"
   }
  ],
  "substats": "Prioridade: Vida% > Recarga de Energia > ATQ% > Vida.",
  "teams": [
   {
    "name": "Hyperbloom",
    "members": [
     {
      "name": "Sangonomiya Kokomi"
     },
     {
      "name": "Nahida"
     },
     {
      "name": "Raiden Shogun"
     },
     {
      "name": "Kaedehara Kazuha"
     }
    ],
    "note": "Kokomi gera Núcleos Dendro, que Raiden detona para Hyperbloom; Kazuha agrupa e reduz RES."
   },
   {
    "name": "Vaporize com Hu Tao",
    "members": [
     {
      "name": "Sangonomiya Kokomi"
     },
     {
      "name": "Hu Tao"
     },
     {
      "name": "Kaedehara Kazuha"
     },
     {
      "name": "Bennett"
     }
    ],
    "note": "Kokomi aplica Hydro para Vaporize constante; Kazuha e Bennett dão grandes buffs de dano."
   },
   {
    "name": "Hydro puro",
    "members": [
     {
      "name": "Sangonomiya Kokomi"
     },
     {
      "name": "Yelan"
     },
     {
      "name": "Xingqiu"
     },
     {
      "name": "Kaedehara Kazuha"
     }
    ],
    "note": "Kokomi é a DPS em campo com Yelan e Xingqiu aplicando Hydro fora de campo."
   }
  ]
 },
 "shenhe": {
  "patch": "5.8",
  "sources": [
   {
    "label": "Icy Veins: builds",
    "url": "https://www.icy-veins.com/genshin-impact/shenhe-guide-best-builds"
   },
   {
    "label": "Genshin-Builds: equipes (Icy Veins team guide indisponivel)",
    "url": "https://genshin-builds.com/en/teams/shenhe"
   }
  ],
  "weapons": [
   {
    "name": "Calamity Queller",
    "note": "Melhor opção (exclusiva), com o maior ATQ base do jogo; vale se investir muito na Shenhe."
   },
   {
    "name": "Engulfing Lightning",
    "note": "Alternativa listada pelo guia."
   },
   {
    "name": "Vortex Vanquisher",
    "note": "Alternativa listada pelo guia."
   },
   {
    "name": "Skyward Spine",
    "note": "Alternativa listada pelo guia."
   },
   {
    "name": "Favonius Lance",
    "note": "Opção mais prática: as partículas ajudam a distribuir Energia e cumprir a Recarga de Energia necessária."
   },
   {
    "name": "Primordial Jade Winged-Spear",
    "note": "Alternativa listada pelo guia."
   },
   {
    "name": "Lithic Spear",
    "note": "Alternativa que exige no mínimo 2 acúmulos para funcionar bem."
   }
  ],
  "artifacts": [
   {
    "name": "Noblesse Oblige",
    "note": "Melhor set: aumenta o suporte, principalmente levando o Supremo ao DPS Cryo."
   },
   {
    "name": "Blizzard Strayer",
    "note": "Mencionado nas composições de equipe do guia, não na build principal dela."
   }
  ],
  "mainStats": [
   {
    "slot": "Areia",
    "value": "ATQ% ou Recarga de Energia"
   },
   {
    "slot": "Cálice",
    "value": "ATQ%"
   },
   {
    "slot": "Tiara",
    "value": "ATQ% (Taxa CRIT com Favonius Lance)"
   }
  ],
  "substats": "Prioridade: Recarga de Energia (cerca de 170-200%) > ATQ% > Taxa CRIT > Dano CRIT > ATQ.",
  "teams": [
   {
    "name": "Permafrost",
    "members": [
     {
      "name": "Shenhe"
     },
     {
      "name": "Kamisato Ayaka"
     },
     {
      "name": "Kaedehara Kazuha"
     },
     {
      "name": "Sangonomiya Kokomi"
     }
    ],
    "note": "Shenhe aumenta o ATQ da Ayaka e reduz a RES Cryo; Kokomi mantém os inimigos congelados."
   },
   {
    "name": "Permafrost 2",
    "members": [
     {
      "name": "Shenhe"
     },
     {
      "name": "Ganyu"
     },
     {
      "name": "Venti"
     },
     {
      "name": "Sangonomiya Kokomi"
     }
    ],
    "note": "O Supremo Cryo de Ganyu congela fora de campo, Venti agrupa e Kokomi mantém o congelamento."
   },
   {
    "name": "Melt",
    "members": [
     {
      "name": "Shenhe"
     },
     {
      "name": "Ganyu"
     },
     {
      "name": "Xiangling"
     },
     {
      "name": "Bennett"
     }
    ],
    "note": "O Pyro de Xiangling ativa Melt no dano Cryo; Bennett fornece buff de ATQ e cura."
   }
  ]
 },
 "sigewinne": {
  "patch": "6.0",
  "sources": [
   {
    "label": "Icy Veins: builds",
    "url": "https://www.icy-veins.com/genshin-impact/sigewinne-guide-best-builds"
   },
   {
    "label": "Genshin-Builds: equipes (Icy Veins team guide indisponivel)",
    "url": "https://genshin-builds.com/en/teams/sigewinne"
   }
  ],
  "weapons": [
   {
    "name": "Silvershower Heartstrings",
    "note": "Arma exclusiva; nicho, mas excelente por ser fácil de ativar."
   },
   {
    "name": "Sequence of Solitude",
    "note": "Arco de Vida que combina com a build focada em Vida."
   },
   {
    "name": "Aqua Simulacra",
    "note": "Fornece Vida extra."
   },
   {
    "name": "Recurve Bow",
    "note": "Arco de Vida que combina com a build focada em Vida."
   },
   {
    "name": "Favonius Warbow",
    "note": "Escolhida para gerar Energia; único caso em que o guia recomenda Taxa CRIT."
   }
  ],
  "artifacts": [
   {
    "name": "Song of Days Past",
    "note": "Primeira recomendação; ela alcança facilmente o limite do efeito para buffar o DPS."
   },
   {
    "name": "Ocean-Hued Clam",
    "note": "Melhor para o dano dela; 2 peças de Vida% ajudam a chegar a cerca de 65 mil de Vida."
   }
  ],
  "mainStats": [
   {
    "slot": "Areia",
    "value": "Vida%"
   },
   {
    "slot": "Cálice",
    "value": "Vida%"
   },
   {
    "slot": "Tiara",
    "value": "Vida%"
   }
  ],
  "substats": "Prioridade: Vida% > Recarga de Energia (só se usar o Supremo) > Taxa CRIT (só com Favonius Warbow) > Dano CRIT.",
  "teams": [
   {
    "name": "Hydro puro",
    "members": [
     {
      "name": "Sigewinne"
     },
     {
      "name": "Yelan"
     },
     {
      "name": "Kaedehara Kazuha"
     },
     {
      "name": "Furina"
     }
    ],
    "note": "Yelan causa o dano Hydro em campo, Furina buffa fora de campo e Sigewinne mantém todos curados."
   },
   {
    "name": "Geo Construct",
    "members": [
     {
      "name": "Sigewinne"
     },
     {
      "name": "Furina"
     },
     {
      "name": "Traveler"
     },
     {
      "name": "Zhongli"
     }
    ],
    "note": "O dano vem da ressonância Geo de Traveler e Zhongli, com Furina aplicando Hydro."
   },
   {
    "name": "Bountiful Bloom",
    "members": [
     {
      "name": "Sigewinne"
     },
     {
      "name": "Alhaitham"
     },
     {
      "name": "Furina"
     },
     {
      "name": "Nilou"
     }
    ],
    "note": "Hydro de Furina e Nilou com Dendro de Alhaitham geram Bloom; Sigewinne cura."
   }
  ]
 },
 "skirk": {
  "patch": "7.1",
  "sources": [
   {
    "label": "Icy Veins: builds",
    "url": "https://www.icy-veins.com/genshin-impact/skirk-guide-best-builds"
   },
   {
    "label": "Icy Veins: equipes",
    "url": "https://www.icy-veins.com/genshin-impact/skirk-team-guide"
   }
  ],
  "weapons": [
   {
    "name": "Azurelight",
    "note": "Arma exclusiva com alto ATQ base, importante pois ela não recebe buffs de ATQ de Bennett ou Iansan."
   },
   {
    "name": "Haran Geppaku Futsu",
    "note": "Dá bônus de dano elemental e de Ataque Normal."
   },
   {
    "name": "Primordial Jade Cutter",
    "note": "Fornece 44% de Taxa CRIT como atributo principal."
   },
   {
    "name": "Mistsplitter Reforged",
    "note": "Alto ATQ base e Dano CRIT, com bônus de dano elemental."
   },
   {
    "name": "Calamity of Eshu",
    "note": "Forte dano de Ataque Normal e CRIT, mas exige um escudeiro."
   },
   {
    "name": "Uraku Misugiri",
    "note": "Bons status e Dano CRIT, com bônus de dano de Ataque Normal."
   },
   {
    "name": "The Black Sword",
    "note": "Dano de Ataque Normal e sustentação; funciona melhor em R5."
   }
  ],
  "artifacts": [
   {
    "name": "Finale of the Deep Galleries",
    "note": "Melhor set: 4 peças aumentam o dano de Ataque Normal e Supremo."
   },
   {
    "name": "Marechaussee Hunter",
    "note": "Aumenta a Taxa CRIT quando a Vida muda; funciona melhor com Furina."
   }
  ],
  "mainStats": [
   {
    "slot": "Areia",
    "value": "ATQ%"
   },
   {
    "slot": "Cálice",
    "value": "Cryo DMG (ou ATQ%)"
   },
   {
    "slot": "Tiara",
    "value": "Taxa CRIT ou Dano CRIT"
   }
  ],
  "substats": "Prioridade: Taxa CRIT e Dano CRIT, depois ATQ%; Proficiência Elemental e Recarga de Energia não são prioridade.",
  "teams": [
   {
    "name": "Freeze Hydro/Cryo",
    "members": [
     {
      "name": "Skirk"
     },
     {
      "name": "Escoffier"
     },
     {
      "name": "Furina"
     },
     {
      "name": "Vodyanitsa"
     }
    ],
    "note": "Escoffier é o melhor suporte para a Skirk e Vodyanitsa é ótima Hydro para Freeze."
   },
   {
    "name": "Escudo Cinder City",
    "members": [
     {
      "name": "Skirk"
     },
     {
      "name": "Escoffier"
     },
     {
      "name": "Furina"
     },
     {
      "name": "Citlali"
     }
    ],
    "note": "Citlali usa Cinder City e Thrilling Tales, dando grande bônus de dano e ATQ, além de escudo."
   },
   {
    "name": "Buffer Cryo",
    "members": [
     {
      "name": "Skirk"
     },
     {
      "name": "Escoffier"
     },
     {
      "name": "Furina"
     },
     {
      "name": "Shenhe"
     }
    ],
    "note": "Shenhe reforça a Skirk com Icy Quill e redução de RES Cryo em equipes Freeze de alto investimento."
   }
  ]
 },
 "tartaglia": {
  "patch": "6.1",
  "sources": [
   {
    "label": "Icy Veins: builds",
    "url": "https://www.icy-veins.com/genshin-impact/childe-tartaglia-guide-best-builds"
   },
   {
    "label": "Icy Veins: equipes (secao na mesma pagina)",
    "url": "https://www.icy-veins.com/genshin-impact/childe-tartaglia-guide-best-builds"
   }
  ],
  "weapons": [
   {
    "name": "Polar Star",
    "note": "Melhor arma dele, desde que você se adapte à mecânica de acúmulos."
   },
   {
    "name": "Aqua Simulacra",
    "note": "Alternativa listada pelo guia."
   },
   {
    "name": "Hunter's Path",
    "note": "Alternativa listada pelo guia."
   },
   {
    "name": "Skyward Harp",
    "note": "Alternativa listada pelo guia."
   },
   {
    "name": "Thundering Pulse",
    "note": "Alternativa listada pelo guia."
   },
   {
    "name": "Astral Vulture's Crimson Plumage",
    "note": "Alternativa listada pelo guia."
   },
   {
    "name": "King's Squire",
    "note": "Alternativa de 4 estrelas listada pelo guia."
   }
  ],
  "artifacts": [
   {
    "name": "Nymph's Dream",
    "note": "Melhor set; sua mecânica de acúmulos combina com a Polar Star."
   },
   {
    "name": "Heart of Depth",
    "note": "Segunda opção; o Tartaglia não aproveita totalmente seus efeitos."
   }
  ],
  "mainStats": [
   {
    "slot": "Areia",
    "value": "ATQ%"
   },
   {
    "slot": "Cálice",
    "value": "Hydro DMG"
   },
   {
    "slot": "Tiara",
    "value": "Taxa CRIT ou Dano CRIT"
   }
  ],
  "substats": "Prioridade: Taxa CRIT > Dano CRIT > ATQ% > Proficiência Elemental > Recarga de Energia.",
  "teams": [
   {
    "name": "Internacional",
    "members": [
     {
      "name": "Tartaglia"
     },
     {
      "name": "Xiangling"
     },
     {
      "name": "Kaedehara Kazuha"
     },
     {
      "name": "Bennett"
     }
    ],
    "note": "Equipe mais popular, geralmente jogada com Kazuha no lugar de Sucrose."
   },
   {
    "name": "Freeze",
    "members": [
     {
      "name": "Tartaglia"
     },
     {
      "name": "Furina"
     },
     {
      "name": "Escoffier"
     },
     {
      "name": "Citlali"
     }
    ],
    "note": "Equipe de congelamento Hydro/Cryo."
   },
   {
    "name": "Taser (Electro-Charged)",
    "members": [
     {
      "name": "Tartaglia"
     },
     {
      "name": "Fischl"
     },
     {
      "name": "Ororon"
     },
     {
      "name": "Bennett"
     }
    ],
    "note": "Equipe de Carga Elétrica com Hydro e Electro."
   }
  ]
 },
 "tighnari": {
  "patch": "5.0",
  "sources": [
   {
    "label": "Icy Veins: builds",
    "url": "https://www.icy-veins.com/genshin-impact/tighnari-guide-best-builds"
   },
   {
    "label": "Icy Veins: equipes",
    "url": "https://www.icy-veins.com/genshin-impact/tighnari-guide-best-builds"
   }
  ],
  "weapons": [
   {
    "name": "Hunter's Path",
    "note": "Melhor opção: aumenta a Taxa CRIT e adiciona dano elemental fixo aos Ataques Carregados, escalando com Proficiência Elemental."
   },
   {
    "name": "Aqua Simulacra",
    "note": "Foca em Dano CRIT e traz uma passiva que aumenta o dano."
   },
   {
    "name": "Polar Star",
    "note": "Foca em Taxa CRIT e traz uma passiva que aumenta o dano."
   },
   {
    "name": "Chain Breaker",
    "note": "Arco de 4 estrelas que aumenta o ATQ% conforme a equipe, perto de 30% no R5; pode ser obtido sem gachapon."
   },
   {
    "name": "Scion of the Blazing Sun",
    "note": "Escolha de 4 estrelas indicada pelo guia."
   },
   {
    "name": "Slingshot",
    "note": "Opção gratuita de 3 estrelas."
   }
  ],
  "artifacts": [
   {
    "name": "Deepwood Memories",
    "note": "Escolha padrão, a menos que outro membro Dendro da equipe já use o conjunto."
   },
   {
    "name": "Gilded Dreams",
    "note": "Segunda opção (2 peças, +80 Proficiência Elemental) se um aliado usar Deepwood Memories; depende da composição da equipe."
   },
   {
    "name": "Wanderer's Troupe",
    "note": "Também boa alternativa (2 peças, +80 Proficiência Elemental), com bônus incondicional."
   }
  ],
  "mainStats": [
   {
    "slot": "Areia",
    "value": "Proficiência Elemental ou ATQ%"
   },
   {
    "slot": "Cálice",
    "value": "Dendro DMG"
   },
   {
    "slot": "Tiara",
    "value": "Taxa CRIT ou Dano CRIT"
   }
  ],
  "substats": "Prioridade: Recarga de Energia até o necessário (cerca de 150%), depois Taxa CRIT/Dano CRIT, Proficiência Elemental e ATQ%.",
  "teams": [
   {
    "name": "Double Electro",
    "members": [
     {
      "name": "Tighnari"
     },
     {
      "name": "Fischl"
     },
     {
      "name": "Yae Miko"
     },
     {
      "name": "Xilonen"
     }
    ],
    "note": "Fischl e Yae Miko causam dano Electro fora de campo; Xilonen cura, aumenta dano e reduz resistência."
   },
   {
    "name": "Aggravate Swirl",
    "members": [
     {
      "name": "Tighnari"
     },
     {
      "name": "Fischl"
     },
     {
      "name": "Kuki Shinobu"
     },
     {
      "name": "Kaedehara Kazuha"
     }
    ],
    "note": "Fischl e Shinobu aplicam Electro para Aggravate e Kazuha espalha Electro com Swirl e buffa o dano."
   },
   {
    "name": "Quickbloom",
    "members": [
     {
      "name": "Tighnari"
     },
     {
      "name": "Raiden Shogun"
     },
     {
      "name": "Furina"
     },
     {
      "name": "Baizhu"
     }
    ],
    "note": "Raiden dá dano Electro e recarga de energia, Furina buffa e Baizhu mantém Dendro e escuda."
   }
  ]
 },
 "venti": {
  "patch": "7.0",
  "sources": [
   {
    "label": "Icy Veins: builds",
    "url": "https://www.icy-veins.com/genshin-impact/venti-guide-best-builds"
   },
   {
    "label": "Icy Veins: equipes",
    "url": "https://www.icy-veins.com/genshin-impact/venti-team-guide"
   }
  ],
  "weapons": [
   {
    "name": "The Daybreak Chronicles",
    "note": "Melhor para Venti DPS principal Hexerei, com grande Dano CRIT e buff fácil de manter; menos indicada para Venti de reações."
   },
   {
    "name": "Elegy for the End",
    "note": "Melhor escolha para Venti de reações: muita Recarga de Energia, mais Proficiência Elemental e buffs de equipe."
   },
   {
    "name": "Polar Star",
    "note": "Boa alternativa para DPS principal, com dano de Habilidade e Supremo e Taxa CRIT."
   },
   {
    "name": "The Stringless",
    "note": "Melhor opção de 4 estrelas para Venti de reações, por Proficiência Elemental e bônus de Habilidade/Supremo."
   },
   {
    "name": "Rust",
    "note": "Melhor opção de 4 estrelas para Venti DPS principal, por seu bom buff de Ataque Normal."
   }
  ],
  "artifacts": [
   {
    "name": "A Day Carved From Rising Winds",
    "note": "Melhor conjunto para Venti DPS principal Hexerei."
   },
   {
    "name": "Viridescent Venerer",
    "note": "Melhor para Venti de reações: aumenta o dano de Swirl e reduz a resistência inimiga."
   },
   {
    "name": "Desert Pavilion Chronicle",
    "note": "Alternativa razoável se já tiver bons artefatos; exige começar a rotação com Ataque Carregado."
   }
  ],
  "mainStats": [
   {
    "slot": "Areia",
    "value": "Proficiência Elemental (reações) ou ATQ% (DPS)"
   },
   {
    "slot": "Cálice",
    "value": "Proficiência Elemental (reações) ou Anemo DMG (DPS)"
   },
   {
    "slot": "Tiara",
    "value": "Proficiência Elemental (reações) ou Dano CRIT/Taxa CRIT (DPS)"
   }
  ],
  "substats": "Prioridade: Recarga de Energia, depois Proficiência Elemental, ATQ% e Taxa CRIT (reações); no DPS, Recarga de Energia, Taxa CRIT/Dano CRIT, ATQ% e Proficiência Elemental.",
  "teams": [
   {
    "name": "Hexerei DPS Principal",
    "members": [
     {
      "name": "Venti"
     },
     {
      "name": "Durin"
     },
     {
      "name": "Nicole"
     },
     {
      "name": "Faruzan"
     }
    ],
    "note": "Durin e Nicole juntos formam a melhor equipe possível para Venti DPS, segundo o guia."
   },
   {
    "name": "Hexerei Fora de Campo",
    "members": [
     {
      "name": "Venti"
     },
     {
      "name": "Varka"
     },
     {
      "name": "Nicole"
     },
     {
      "name": "Durin"
     }
    ],
    "note": "Venti é uma ótima opção fora de campo para Varka, cobrindo os espaços Anemo e Hexerei."
   },
   {
    "name": "Hexerei Fora de Campo (Bennett)",
    "members": [
     {
      "name": "Venti"
     },
     {
      "name": "Varka"
     },
     {
      "name": "Bennett"
     },
     {
      "name": "Durin"
     }
    ],
    "note": "Mesma estrutura, com Bennett no lugar de Nicole como segunda melhor alternativa."
   }
  ]
 },
 "wanderer": {
  "patch": "7.0",
  "sources": [
   {
    "label": "Icy Veins: builds",
    "url": "https://www.icy-veins.com/genshin-impact/wanderer-guide-best-builds"
   },
   {
    "label": "Icy Veins: equipes",
    "url": "https://www.icy-veins.com/genshin-impact/wanderer-team-guide"
   }
  ],
  "weapons": [
   {
    "name": "Tulaytullah's Remembrance",
    "note": "Arma exclusiva e melhor opção: Dano CRIT, Velocidade de Ataque Normal e buff de Ataque Normal após a Habilidade."
   },
   {
    "name": "Lost Prayer to the Sacred Winds",
    "note": "Segunda melhor de 5 estrelas: Taxa CRIT, ATQ e bônus elemental que cresce com o tempo em campo."
   },
   {
    "name": "Cashflow Supervision",
    "note": "Forte, mas só com Furina, pois depende de variações de Vida."
   },
   {
    "name": "Memory of Dust",
    "note": "Dá ATQ% e ATQ crescente ao acertar golpes, com ATQ extra sob escudo."
   },
   {
    "name": "Skyward Atlas",
    "note": "Dá bônus de Dano Elemental e ataques periódicos das Nuvens Errantes."
   },
   {
    "name": "Kagura's Verity",
    "note": "Dá Dano CRIT e aumenta o dano de Habilidade e Stellar-Conduct."
   },
   {
    "name": "Tome of the Eternal Flow",
    "note": "Dá Vida%, dano de Ataque Carregado e pode restaurar Energia."
   }
  ],
  "artifacts": [
   {
    "name": "Desert Pavilion Chronicle",
    "note": "Melhor conjunto, feito para ele; exige começar a rotação com Ataque Carregado."
   },
   {
    "name": "Shimenawa's Reminiscence",
    "note": "Boa opção, mas gasta muita Energia; o guia desaconselha com C2."
   },
   {
    "name": "Marechaussee Hunter",
    "note": "Só vale a pena com Furina ou outro personagem que drene Vida."
   }
  ],
  "mainStats": [
   {
    "slot": "Areia",
    "value": "ATQ%"
   },
   {
    "slot": "Cálice",
    "value": "Anemo DMG"
   },
   {
    "slot": "Tiara",
    "value": "Dano CRIT ou Taxa CRIT"
   }
  ],
  "substats": "Prioridade: Taxa CRIT/Dano CRIT, depois ATQ%, ATQ, Proficiência Elemental e Recarga de Energia (só a partir de C2, ou cerca de 100% antes disso).",
  "teams": [
   {
    "name": "Hypercarry (Furina)",
    "members": [
     {
      "name": "Wanderer"
     },
     {
      "name": "Faruzan"
     },
     {
      "name": "Bennett"
     },
     {
      "name": "Furina"
     }
    ],
    "note": "Furina é ótima suporte e DPS fora de campo; Faruzan é a melhor suporte para ele, e Bennett cura."
   },
   {
    "name": "Hypercarry (Venti)",
    "members": [
     {
      "name": "Wanderer"
     },
     {
      "name": "Faruzan"
     },
     {
      "name": "Bennett"
     },
     {
      "name": "Venti"
     }
    ],
    "note": "O Vórtice de Venti agrupa inimigos e dá mais tempo de dano ao Wanderer."
   },
   {
    "name": "Hypercarry (Zhongli)",
    "members": [
     {
      "name": "Wanderer"
     },
     {
      "name": "Faruzan"
     },
     {
      "name": "Bennett"
     },
     {
      "name": "Zhongli"
     }
    ],
    "note": "Zhongli é o melhor escudo para o frágil Wanderer."
   }
  ]
 },
 "wriothesley": {
  "patch": "7.0",
  "sources": [
   {
    "label": "Icy Veins: builds",
    "url": "https://www.icy-veins.com/genshin-impact/wriothesley-guide-best-builds"
   },
   {
    "label": "Icy Veins: equipes",
    "url": "https://www.icy-veins.com/genshin-impact/wriothesley-team-guide"
   }
  ],
  "weapons": [
   {
    "name": "Cashflow Supervision",
    "note": "Arma exclusiva e melhor opção: escala com variações de Vida e aumenta o dano de Ataque Normal e Carregado."
   },
   {
    "name": "Tulaytullah's Remembrance",
    "note": "Forte opção de 5 estrelas com Velocidade de Ataque Normal e grande bônus de Ataque Normal."
   },
   {
    "name": "The Widsith",
    "note": "Melhor opção de 4 estrelas no R5, com Dano CRIT e bônus aleatório."
   },
   {
    "name": "Flowing Purity",
    "note": "Melhor opção gratuita, pois pode ser criada; dá Dano Elemental e efeito Laço de Vida."
   },
   {
    "name": "Tome of the Eternal Flow",
    "note": "Alternativa de 5 estrelas listada pelo guia."
   },
   {
    "name": "Skyward Atlas",
    "note": "Alternativa de 5 estrelas listada pelo guia."
   },
   {
    "name": "Lost Prayer to the Sacred Winds",
    "note": "Alternativa de 5 estrelas listada pelo guia."
   }
  ],
  "artifacts": [
   {
    "name": "Marechaussee Hunter",
    "note": "Único conjunto recomendado: +15% dano de Ataque Normal/Carregado e Taxa CRIT quando a Vida muda."
   }
  ],
  "mainStats": [
   {
    "slot": "Areia",
    "value": "ATQ%"
   },
   {
    "slot": "Cálice",
    "value": "Cryo DMG"
   },
   {
    "slot": "Tiara",
    "value": "Dano CRIT ou Taxa CRIT"
   }
  ],
  "substats": "Prioridade: Taxa CRIT/Dano CRIT, depois ATQ%, Proficiência Elemental e Recarga de Energia (cerca de 100% basta; 200%+ para Supremo toda rotação).",
  "teams": [
   {
    "name": "Freeze",
    "members": [
     {
      "name": "Wriothesley"
     },
     {
      "name": "Furina"
     },
     {
      "name": "Escoffier"
     },
     {
      "name": "Shenhe"
     }
    ],
    "note": "Furina é o parceiro perfeito, Escoffier a melhor suporte e Shenhe uma das melhores buffers Cryo."
   },
   {
    "name": "Melt",
    "members": [
     {
      "name": "Wriothesley"
     },
     {
      "name": "Mavuika"
     },
     {
      "name": "Bennett"
     },
     {
      "name": "Zhongli"
     }
    ],
    "note": "Bennett é quase indispensável nas equipes Melt dele, com buff de ATQ e aplicação Pyro."
   },
   {
    "name": "Freeze (sem Furina)",
    "members": [
     {
      "name": "Wriothesley"
     },
     {
      "name": "Yelan"
     },
     {
      "name": "Shenhe"
     },
     {
      "name": "Escoffier"
     }
    ],
    "note": "Opção Freeze sem Furina, com o Hydro de Yelan e os buffs de Shenhe e Escoffier."
   }
  ]
 },
 "xianyun": {
  "patch": "6.0",
  "sources": [
   {
    "label": "Icy Veins: builds",
    "url": "https://www.icy-veins.com/genshin-impact/xianyun-guide-best-builds"
   },
   {
    "label": "Icy Veins: equipes",
    "url": "https://www.icy-veins.com/genshin-impact/xianyun-guide-best-builds"
   }
  ],
  "weapons": [
   {
    "name": "Crane's Echoing Call",
    "note": "Melhor opção: muito ATQ, reduz requisitos de Energia e aumenta o dano de Ataque Imersivo da equipe."
   },
   {
    "name": "Memory of Dust",
    "note": "Boa opção com muito ATQ%."
   },
   {
    "name": "Skyward Atlas",
    "note": "Também boa opção com muito ATQ%."
   },
   {
    "name": "Favonius Codex",
    "note": "Ligada à Taxa CRIT nas substats e afeta os requisitos de Energia."
   },
   {
    "name": "Cashflow Supervision",
    "note": "Listada como alternativa."
   },
   {
    "name": "Flowing Purity",
    "note": "Listada como alternativa."
   },
   {
    "name": "Oathsworn Eye",
    "note": "Listada como alternativa."
   }
  ],
  "artifacts": [
   {
    "name": "Viridescent Venerer",
    "note": "Escolha padrão por reduzir a resistência elemental dos inimigos."
   },
   {
    "name": "Noblesse Oblige",
    "note": "Indicada quando não há Swirl ou outro personagem já usa Viridescent."
   },
   {
    "name": "Song of Days Past",
    "note": "Mesma situação do Noblesse Oblige."
   }
  ],
  "mainStats": [
   {
    "slot": "Areia",
    "value": "ATQ% ou Recarga de Energia"
   },
   {
    "slot": "Cálice",
    "value": "ATQ%"
   },
   {
    "slot": "Tiara",
    "value": "ATQ%"
   }
  ],
  "substats": "Prioridade: Recarga de Energia até o necessário para a equipe, depois ATQ%, ATQ e Taxa CRIT (com Favonius Codex).",
  "teams": [
   {
    "name": "Plunge DPS",
    "members": [
     {
      "name": "Xianyun"
     },
     {
      "name": "Gaming"
     },
     {
      "name": "Citlali"
     },
     {
      "name": "Bennett"
     }
    ],
    "note": "DPS focados em Ataque Imersivo se beneficiam mais de Xianyun; Bennett fornece infusão elemental."
   },
   {
    "name": "Plunge Claymore",
    "members": [
     {
      "name": "Xianyun"
     },
     {
      "name": "Diluc"
     },
     {
      "name": "Furina"
     },
     {
      "name": "Bennett"
     }
    ],
    "note": "Diluc ganha muito com o buff de Ataque Imersivo de Xianyun."
   },
   {
    "name": "Plunge Vaporize",
    "members": [
     {
      "name": "Xianyun"
     },
     {
      "name": "Hu Tao"
     },
     {
      "name": "Yelan"
     },
     {
      "name": "Furina"
     }
    ],
    "note": "Xianyun muda Hu Tao para Ataques Imersivos, com o Hydro de Yelan mantendo Vaporize."
   }
  ]
 },
 "xiao": {
  "patch": "7.0",
  "sources": [
   {
    "label": "Icy Veins: builds",
    "url": "https://www.icy-veins.com/genshin-impact/xiao-guide-best-builds"
   },
   {
    "label": "Icy Veins: equipes",
    "url": "https://www.icy-veins.com/genshin-impact/xiao-team-guide"
   }
  ],
  "weapons": [
   {
    "name": "Primordial Jade Winged-Spear",
    "note": "Arma exclusiva com o maior ATQ base de lanças e 22,1% de Taxa CRIT; passiva acumula ATQ e dano."
   },
   {
    "name": "Staff of Homa",
    "note": "Muito ATQ e 66,2% de Dano CRIT; o guia recomenda ignorar a passiva de Vida."
   },
   {
    "name": "Lumidouce Elegy",
    "note": "Uma das maiores Taxas CRIT (33,1%) e algum ATQ; equivalente ao Staff of Homa."
   },
   {
    "name": "Deathmatch",
    "note": "Melhor opção de 4 estrelas com Passe de Batalha: 36,8% de Taxa CRIT e bônus de ATQ e DEF."
   },
   {
    "name": "Lithic Spear",
    "note": "Boa opção de 4 estrelas com ATQ base alto, mas exige personagens de Liyue na equipe."
   }
  ],
  "artifacts": [
   {
    "name": "Long Night's Oath",
    "note": "Melhor conjunto atual: aumenta o dano de Ataque Imersivo com as duas partes."
   },
   {
    "name": "Vermillion Hereafter",
    "note": "Ainda competitivo, mas um pouco mais fraco; não vale farmar se já tiver um bom conjunto."
   },
   {
    "name": "Marechaussee Hunter",
    "note": "Forte apenas com Furina, cuja drenagem de Vida acumula o bônus rápido."
   }
  ],
  "mainStats": [
   {
    "slot": "Areia",
    "value": "ATQ%"
   },
   {
    "slot": "Cálice",
    "value": "Anemo DMG"
   },
   {
    "slot": "Tiara",
    "value": "Dano CRIT ou Taxa CRIT"
   }
  ],
  "substats": "Prioridade: Recarga de Energia (cerca de 120-140%), depois Taxa CRIT = Dano CRIT, e ATQ%.",
  "teams": [
   {
    "name": "Plunge Hypercarry (Xianyun)",
    "members": [
     {
      "name": "Xiao"
     },
     {
      "name": "Xianyun"
     },
     {
      "name": "Faruzan"
     },
     {
      "name": "Furina"
     }
    ],
    "note": "Xianyun é a melhor suporte do Xiao, Faruzan reduz resistência Anemo e Furina dá dano fora de campo."
   },
   {
    "name": "Plunge Hypercarry (Escudo)",
    "members": [
     {
      "name": "Xiao"
     },
     {
      "name": "Nicole"
     },
     {
      "name": "Faruzan"
     },
     {
      "name": "Durin"
     }
    ],
    "note": "Nicole aumenta o dano do Xiao e dá escudo pela duração do buff."
   },
   {
    "name": "Plunge Hypercarry (Cura)",
    "members": [
     {
      "name": "Xiao"
     },
     {
      "name": "Faruzan"
     },
     {
      "name": "Jean"
     },
     {
      "name": "Bennett"
     }
    ],
    "note": "Jean fornece partículas, buffs e cura como alternativa a Xianyun."
   }
  ]
 },
 "xilonen": {
  "patch": "6.7",
  "sources": [
   {
    "label": "Icy Veins: builds",
    "url": "https://www.icy-veins.com/genshin-impact/xilonen-guide-best-builds"
   },
   {
    "label": "Icy Veins: equipes",
    "url": "https://www.icy-veins.com/genshin-impact/xilonen-team-guide"
   }
  ],
  "weapons": [
   {
    "name": "Peak Patrol Song",
    "note": "Arma exclusiva e melhor opção: dá muita DEF e Dano Elemental à equipe escalado pela DEF."
   },
   {
    "name": "Favonius Sword",
    "note": "Uma das melhores de suporte pela Recarga de Energia; precisa de Taxa CRIT para ativar."
   },
   {
    "name": "Freedom-Sworn",
    "note": "Viável se a equipe aproveitar seus buffs de Ataque Normal, Carregado e Imersivo."
   },
   {
    "name": "Skyrider Sword",
    "note": "Melhor opção gratuita acessível, com Recarga de Energia."
   },
   {
    "name": "Flute of Ezpitzal",
    "note": "Boa opção criável com DEF% que aumenta sua cura e dano, mas sem utilidade de Energia."
   }
  ],
  "artifacts": [
   {
    "name": "Scroll of the Hero of Cinder City",
    "note": "Melhor conjunto na maioria das equipes, pois ela é de Natlan e aproveita o bônus de Dano Elemental."
   },
   {
    "name": "Instructor",
    "note": "Boa alternativa se um aliado de Natlan já usa o Scroll; combina com Melt e Vaporize."
   },
   {
    "name": "Archaic Petra",
    "note": "Outra opção se o Scroll já estiver coberto; dá bônus elemental à equipe após coletar um fragmento Cristalizar."
   }
  ],
  "mainStats": [
   {
    "slot": "Areia",
    "value": "Recarga de Energia ou DEF%"
   },
   {
    "slot": "Cálice",
    "value": "DEF%"
   },
   {
    "slot": "Tiara",
    "value": "DEF% ou Taxa CRIT"
   }
  ],
  "substats": "Prioridade: Recarga de Energia, DEF%, Taxa CRIT (só com Favonius Sword) e DEF fixa.",
  "teams": [
   {
    "name": "Hydro DPS",
    "members": [
     {
      "name": "Xilonen"
     },
     {
      "name": "Neuvillette"
     },
     {
      "name": "Furina"
     },
     {
      "name": "Kaedehara Kazuha"
     }
    ],
    "note": "Neuvillette é um excelente parceiro, em uma equipe Hydro premium com Furina e Kazuha."
   },
   {
    "name": "Pyro DPS (Mavuika)",
    "members": [
     {
      "name": "Xilonen"
     },
     {
      "name": "Mavuika"
     },
     {
      "name": "Citlali"
     },
     {
      "name": "Bennett"
     }
    ],
    "note": "A redução de resistência Pyro de Xilonen é muito valiosa em equipes de reação."
   },
   {
    "name": "Pyro DPS (Arlecchino)",
    "members": [
     {
      "name": "Xilonen"
     },
     {
      "name": "Arlecchino"
     },
     {
      "name": "Citlali"
     },
     {
      "name": "Bennett"
     }
    ],
    "note": "Arlecchino aproveita muito bem a Xilonen, com o mesmo núcleo de suporte de Citlali e Bennett."
   }
  ]
 },
 "yae-miko": {
  "patch": "7.1",
  "sources": [
   {
    "label": "Icy Veins: builds",
    "url": "https://www.icy-veins.com/genshin-impact/yae-miko-guide-best-builds"
   },
   {
    "label": "Icy Veins: equipes",
    "url": "https://www.icy-veins.com/genshin-impact/yae-miko-team-guide"
   }
  ],
  "weapons": [
   {
    "name": "Kagura's Verity",
    "note": "Melhor opção geral: aumenta o dano de Habilidade e Stellar-Conduct."
   },
   {
    "name": "Vivid Notions",
    "note": "Quase empatada com a primeira, com Dano CRIT e ATQ."
   },
   {
    "name": "Reliquary of Truth",
    "note": "Também quase empatada, com muito valor CRIT e Proficiência Elemental."
   },
   {
    "name": "Cashflow Supervision",
    "note": "Quarta colocada, sem justificativa específica no guia."
   },
   {
    "name": "Echoes of the Heart",
    "note": "Opção criável de 4 estrelas que, no R5, quase iguala a Kagura's Verity em equipes Stellar-Conduct."
   },
   {
    "name": "Angelos' Heptades",
    "note": "Sexta colocada, sem justificativa específica no guia."
   }
  ],
  "artifacts": [
   {
    "name": "Disenchantment in Deep Shadow",
    "note": "Conjunto recomendado para Stellar-Conduct: aumenta o dano da reação e dá 16% de Taxa CRIT."
   },
   {
    "name": "Gilded Dreams",
    "note": "Geralmente a melhor em equipes Quicken/Hyperbloom, por pouco sobre Golden Troupe."
   },
   {
    "name": "Golden Troupe",
    "note": "Geralmente a melhor como Sub-DPS Electro, pois a Habilidade é seu principal dano."
   }
  ],
  "mainStats": [
   {
    "slot": "Areia",
    "value": "ATQ%"
   },
   {
    "slot": "Cálice",
    "value": "ATQ% (ou Proficiência Elemental)"
   },
   {
    "slot": "Tiara",
    "value": "Taxa CRIT ou Dano CRIT"
   }
  ],
  "substats": "Prioridade: Taxa CRIT, depois Dano CRIT, ATQ% e Proficiência Elemental.",
  "teams": [
   {
    "name": "Stellar-Conduct",
    "members": [
     {
      "name": "Yae Miko"
     },
     {
      "name": "Sandrone"
     },
     {
      "name": "Alyosha"
     },
     {
      "name": "Odette"
     }
    ],
    "note": "Com Sandrone, Yae Miko contribui com 20-25% do dano da equipe fora de campo."
   },
   {
    "name": "Quicken",
    "members": [
     {
      "name": "Yae Miko"
     },
     {
      "name": "Raiden Shogun"
     },
     {
      "name": "Nahida"
     },
     {
      "name": "Xilonen"
     }
    ],
    "note": "O Supremo de Yae restaura cargas da Raiden e Nahida fornece muito Dendro fora de campo."
   },
   {
    "name": "Stellar-Conduct (Wriothesley)",
    "members": [
     {
      "name": "Yae Miko"
     },
     {
      "name": "Wriothesley"
     },
     {
      "name": "Alyosha"
     },
     {
      "name": "Odette"
     }
    ],
    "note": "Mesmo núcleo Stellar-Conduct, trocando Sandrone por Wriothesley, um atacante Cryo."
   }
  ]
 },
 "yelan": {
  "patch": "6.1",
  "sources": [
   {
    "label": "Icy Veins: builds",
    "url": "https://www.icy-veins.com/genshin-impact/yelan-guide-best-builds"
   },
   {
    "label": "Icy Veins: equipes",
    "url": "https://www.icy-veins.com/genshin-impact/yelan-guide-best-builds"
   }
  ],
  "weapons": [
   {
    "name": "Aqua Simulacra",
    "note": "Melhor arma da Yelan na maioria dos casos."
   },
   {
    "name": "Elegy for the End",
    "note": "Causa mais dano ao time em composições com muitas reações elementais."
   },
   {
    "name": "Favonius Warbow",
    "note": "Ótima opção 4 estrelas que reduz a necessidade de Recarga de Energia e apoia o time."
   },
   {
    "name": "Silvershower Heartstrings",
    "note": "Listada como alternativa viável."
   },
   {
    "name": "Mouun's Moon",
    "note": "Listada como alternativa viável."
   },
   {
    "name": "The Stringless",
    "note": "Alternativa listada pelo guia."
   },
   {
    "name": "Sacrificial Bow",
    "note": "Aumenta a frequência da Lingering Lifeline, mas eleva a necessidade de Recarga de Energia."
   }
  ],
  "artifacts": [
   {
    "name": "Emblem of Severed Fate",
    "note": "De longe o melhor conjunto para a Yelan como Sub DPS."
   }
  ],
  "mainStats": [
   {
    "slot": "Areia",
    "value": "Recarga de Energia ou Vida%"
   },
   {
    "slot": "Cálice",
    "value": "Hydro DMG ou Vida%"
   },
   {
    "slot": "Tiara",
    "value": "Taxa CRIT ou Dano CRIT"
   }
  ],
  "substats": "Prioridade: Recarga de Energia > Vida% > Taxa CRIT / Dano CRIT > Vida fixa.",
  "teams": [
   {
    "name": "Freeze",
    "members": [
     {
      "name": "Yelan"
     },
     {
      "name": "Skirk"
     },
     {
      "name": "Furina"
     },
     {
      "name": "Escoffier"
     }
    ],
    "note": "Equipe de congelamento com Skirk como DPS principal."
   },
   {
    "name": "Lunar-Charged",
    "members": [
     {
      "name": "Yelan"
     },
     {
      "name": "Flins"
     },
     {
      "name": "Ineffa"
     },
     {
      "name": "Sucrose"
     }
    ],
    "note": "Equipe Lunar-Charged com Flins como DPS."
   },
   {
    "name": "Vaporize/Melt",
    "members": [
     {
      "name": "Yelan"
     },
     {
      "name": "Hu Tao"
     },
     {
      "name": "Xingqiu"
     },
     {
      "name": "Citlali"
     }
    ],
    "note": "Equipe Pyro DPS com Hu Tao como foco."
   }
  ]
 },
 "yoimiya": {
  "patch": "5.8",
  "sources": [
   {
    "label": "Icy Veins: builds",
    "url": "https://www.icy-veins.com/genshin-impact/yoimiya-guide-best-builds"
   },
   {
    "label": "Icy Veins: equipes",
    "url": "https://www.icy-veins.com/genshin-impact/yoimiya-guide-best-builds"
   }
  ],
  "weapons": [
   {
    "name": "Thundering Pulse",
    "note": "Melhor arma; ela aproveita todo o passivo durante o Firework Flare-Up."
   },
   {
    "name": "Rust",
    "note": "Em R5 supera Aqua Simulacra e Slingshot R5."
   },
   {
    "name": "Aqua Simulacra",
    "note": "Geralmente um pouco melhor que Slingshot R5, mas atrás de Rust R5."
   },
   {
    "name": "Slingshot",
    "note": "Fácil de obter e com faixa de ativação folgada; pode superar Rust com buffs de ATQ."
   },
   {
    "name": "The First Great Magic",
    "note": "Listada como alternativa."
   },
   {
    "name": "Hunter's Path",
    "note": "Listada como alternativa."
   },
   {
    "name": "Skyward Harp",
    "note": "Listada como alternativa."
   }
  ],
  "artifacts": [
   {
    "name": "Shimenawa's Reminiscence",
    "note": "Usado na maioria dos casos, pois o dano vem do Firework Flare-Up e ela raramente usa o Ultimate."
   },
   {
    "name": "Crimson Witch of Flames",
    "note": "Melhor em times de reação como Vaporize e Overload, permitindo snapshot do buff de ATQ%."
   }
  ],
  "mainStats": [
   {
    "slot": "Areia",
    "value": "ATQ% ou Proficiência Elemental"
   },
   {
    "slot": "Cálice",
    "value": "Pyro DMG"
   },
   {
    "slot": "Tiara",
    "value": "Taxa CRIT ou Dano CRIT"
   }
  ],
  "substats": "Prioridade: Dano CRIT / Taxa CRIT > ATQ% > Proficiência Elemental > Recarga de Energia.",
  "teams": [
   {
    "name": "Vaporize",
    "members": [
     {
      "name": "Yoimiya"
     },
     {
      "name": "Xingqiu"
     },
     {
      "name": "Bennett"
     },
     {
      "name": "Zhongli"
     }
    ],
    "note": "Xingqiu ou Yelan como Sub DPS, com suporte de Pyro e escudo."
   },
   {
    "name": "Overload",
    "members": [
     {
      "name": "Yoimiya"
     },
     {
      "name": "Fischl"
     },
     {
      "name": "Bennett"
     },
     {
      "name": "Chevreuse"
     }
    ],
    "note": "Fischl ou Raiden Shogun no Electro, com Chevreuse de suporte."
   },
   {
    "name": "OverVape",
    "members": [
     {
      "name": "Yoimiya"
     },
     {
      "name": "Xingqiu"
     },
     {
      "name": "Fischl"
     },
     {
      "name": "Kaedehara Kazuha"
     }
    ],
    "note": "Combina Hydro e Electro; a Crimson Witch é recomendada aqui."
   }
  ]
 },
 "zhongli": {
  "patch": "6.5",
  "sources": [
   {
    "label": "Icy Veins: builds",
    "url": "https://www.icy-veins.com/genshin-impact/zhongli-guide-best-builds"
   },
   {
    "label": "Icy Veins: equipes",
    "url": "https://www.icy-veins.com/genshin-impact/zhongli-team-guide"
   }
  ],
  "weapons": [
   {
    "name": "Favonius Lance",
    "note": "Gera partículas extras e Recarga de Energia; melhor arma de suporte na maioria dos times."
   },
   {
    "name": "Black Tassel",
    "note": "Seu Vida% a torna a melhor opção para escudo puro."
   },
   {
    "name": "Staff of Homa",
    "note": "Melhor escolha para Burst Support, com Dano CRIT e Vida% que ajudam dano e escudo."
   },
   {
    "name": "Lumidouce Elegy",
    "note": "Forte opção 5 estrelas ofensiva para Burst Support."
   },
   {
    "name": "Dialogues of the Desert Sages",
    "note": "Arma de Vida% para uma build mais defensiva."
   },
   {
    "name": "The Catch",
    "note": "Boa opção gratuita para Burst Support, com Recarga de Energia e dano de Burst."
   }
  ],
  "artifacts": [
   {
    "name": "Scroll of the Hero of Cinder City",
    "note": "Geralmente o melhor conjunto de suporte quando o time ativa Crystallize com frequência."
   },
   {
    "name": "Emblem of Severed Fate",
    "note": "Melhor para Burst Support, pois dá Recarga de Energia e escala o dano de Burst."
   },
   {
    "name": "Tenacity of the Millelith",
    "note": "A Stone Stele ativa o efeito de 4 peças, aumentando ATQ do time e Força do Escudo."
   }
  ],
  "mainStats": [
   {
    "slot": "Areia",
    "value": "Vida% (escudo puro) ou ATQ%/Vida% (Burst Support)"
   },
   {
    "slot": "Cálice",
    "value": "Vida% (escudo puro) ou Geo DMG (Burst Support)"
   },
   {
    "slot": "Tiara",
    "value": "Vida% (escudo puro) ou Taxa CRIT/Dano CRIT (Burst Support)"
   }
  ],
  "substats": "Prioridade: escudo puro Vida% > Vida fixa > Recarga de Energia; Burst Support Taxa CRIT/Dano CRIT > ATQ% > Vida% > Recarga de Energia.",
  "teams": [
   {
    "name": "Arlecchino",
    "members": [
     {
      "name": "Zhongli"
     },
     {
      "name": "Arlecchino"
     },
     {
      "name": "Yelan"
     },
     {
      "name": "Bennett"
     }
    ],
    "note": "O escudo do Zhongli protege a Arlecchino, que não pode ser curada normalmente, e reduz a RES Pyro."
   },
   {
    "name": "Arlecchino",
    "members": [
     {
      "name": "Zhongli"
     },
     {
      "name": "Arlecchino"
     },
     {
      "name": "Chiori"
     },
     {
      "name": "Bennett"
     }
    ],
    "note": "Mesmo núcleo: escudo protetor e redução de RES Pyro."
   },
   {
    "name": "Arlecchino",
    "members": [
     {
      "name": "Zhongli"
     },
     {
      "name": "Arlecchino"
     },
     {
      "name": "Xingqiu"
     },
     {
      "name": "Bennett"
     }
    ],
    "note": "Mesmo núcleo: escudo protetor e redução de RES Pyro."
   }
  ]
 },
 "varesa": {
  "patch": "6.0",
  "sources": [
   {
    "label": "Icy Veins: builds",
    "url": "https://www.icy-veins.com/genshin-impact/varesa-guide-best-builds"
   },
   {
    "label": "Icy Veins: equipes",
    "url": "https://www.icy-veins.com/genshin-impact/varesa-guide-best-builds"
   }
  ],
  "weapons": [
   {
    "name": "Vivid Notions",
    "note": "Arma exclusiva e melhor opção, com grande aumento de dano sobre outras 5 estrelas."
   },
   {
    "name": "Kagura's Verity",
    "note": "Alternativa 5 estrelas listada pelo guia."
   },
   {
    "name": "Lost Prayer to the Sacred Winds",
    "note": "Alternativa 5 estrelas listada pelo guia."
   },
   {
    "name": "Tome of the Eternal Flow",
    "note": "Alternativa listada; funciona como stat stick."
   },
   {
    "name": "Cashflow Supervision",
    "note": "Alternativa listada; funciona como stat stick."
   },
   {
    "name": "The Widsith",
    "note": "Alternativa listada; funciona como stat stick."
   },
   {
    "name": "Sacrificial Jade",
    "note": "Alternativa listada; funciona como stat stick."
   }
  ],
  "artifacts": [
   {
    "name": "Long Night's Oath",
    "note": "Dano ligeiramente maior que o Obsidian Codex."
   },
   {
    "name": "Obsidian Codex",
    "note": "Geralmente mais prático por ser mais eficiente em resina e servir a mais personagens."
   }
  ],
  "mainStats": [
   {
    "slot": "Areia",
    "value": "ATQ%"
   },
   {
    "slot": "Cálice",
    "value": "Electro DMG ou ATQ%"
   },
   {
    "slot": "Tiara",
    "value": "Taxa CRIT ou Dano CRIT"
   }
  ],
  "substats": "Prioridade: Taxa CRIT / Dano CRIT > ATQ% > Recarga de Energia (cerca de 120-130% no total, conforme o time).",
  "teams": [
   {
    "name": "Xianyun",
    "members": [
     {
      "name": "Varesa"
     },
     {
      "name": "Furina"
     },
     {
      "name": "Iansan"
     },
     {
      "name": "Xianyun"
     }
    ],
    "note": "Time com Xianyun para o plunge da Varesa."
   },
   {
    "name": "Xianyun",
    "members": [
     {
      "name": "Varesa"
     },
     {
      "name": "Furina"
     },
     {
      "name": "Ineffa"
     },
     {
      "name": "Xianyun"
     }
    ],
    "note": "Variação com Ineffa no lugar da Iansan."
   },
   {
    "name": "Xianyun",
    "members": [
     {
      "name": "Varesa"
     },
     {
      "name": "Xilonen"
     },
     {
      "name": "Iansan"
     },
     {
      "name": "Xianyun"
     }
    ],
    "note": "Variação com Xilonen no lugar da Furina."
   }
  ]
 },
 "ineffa": {
  "patch": "7.0",
  "sources": [
   {
    "label": "Icy Veins: builds",
    "url": "https://www.icy-veins.com/genshin-impact/ineffa-guide-best-builds"
   },
   {
    "label": "Icy Veins: equipes",
    "url": "https://www.icy-veins.com/genshin-impact/ineffa-team-guide"
   }
  ],
  "weapons": [
   {
    "name": "Fractured Halo",
    "note": "Arma exclusiva, com Dano CRIT e ATQ altos e buff de Lunar-Charged para o time."
   },
   {
    "name": "Staff of the Scarlet Sands",
    "note": "Grande bônus de Taxa CRIT e ATQ extra baseado em Proficiência Elemental."
   },
   {
    "name": "Calamity Queller",
    "note": "Muito ATQ bruto e reforça seu escudo e o buff de Proficiência Elemental."
   },
   {
    "name": "Staff of Homa",
    "note": "Boa arma genérica com Dano CRIT e ATQ."
   },
   {
    "name": "Bloodsoaked Ruins",
    "note": "Dá bônus de Lunar-Charged e Dano CRIT, com uptime limitado, e reembolsa energia."
   },
   {
    "name": "Sacrificer's Staff",
    "note": "Melhor opção 4 estrelas em R1, com ATQ e Recarga de Energia."
   },
   {
    "name": "Skyward Spine",
    "note": "ATQ base alto e Recarga de Energia suficiente para usar o Ultimate a cada rotação."
   }
  ],
  "artifacts": [
   {
    "name": "Silken Moon's Serenade",
    "note": "Serve para quase qualquer time com Ascendant Gleam; use na Ineffa se nenhum outro suporte puder."
   },
   {
    "name": "Aubade of Morningstar and Moon",
    "note": "Maximiza seu dano off-field, mas só vale com Ascendant Gleam no time."
   },
   {
    "name": "Gilded Dreams",
    "note": "Melhor escolha para dano pessoal se o time não tiver Ascendant Gleam."
   }
  ],
  "mainStats": [
   {
    "slot": "Areia",
    "value": "ATQ%, depois Proficiência Elemental"
   },
   {
    "slot": "Cálice",
    "value": "ATQ%, depois Proficiência Elemental"
   },
   {
    "slot": "Tiara",
    "value": "Taxa CRIT ou Dano CRIT, depois ATQ%"
   }
  ],
  "substats": "Prioridade: Recarga de Energia (conforme o time) > Taxa CRIT / Dano CRIT > ATQ% > Proficiência Elemental.",
  "teams": [
   {
    "name": "Lunar-Charged",
    "members": [
     {
      "name": "Ineffa"
     },
     {
      "name": "Flins"
     },
     {
      "name": "Columbina"
     },
     {
      "name": "Sucrose"
     }
    ],
    "note": "Flins como DPS Electro; Columbina é a melhor parceira da Ineffa."
   },
   {
    "name": "Lunar-Charged",
    "members": [
     {
      "name": "Ineffa"
     },
     {
      "name": "Cyno"
     },
     {
      "name": "Columbina"
     },
     {
      "name": "Odette"
     }
    ],
    "note": "Cyno escala com Proficiência Elemental; Odette ativa Stellar-Conduct."
   },
   {
    "name": "Lunar-Charged",
    "members": [
     {
      "name": "Ineffa"
     },
     {
      "name": "Yae Miko"
     },
     {
      "name": "Columbina"
     },
     {
      "name": "Odette"
     }
    ],
    "note": "Yae Miko como DPS Electro com Columbina e Odette."
   }
  ]
 },
 "lauma": {
  "patch": "6.3",
  "sources": [
   {
    "label": "Icy Veins: builds",
    "url": "https://www.icy-veins.com/genshin-impact/lauma-guide-best-builds"
   },
   {
    "label": "Icy Veins: equipes",
    "url": "https://www.icy-veins.com/genshin-impact/lauma-team-guide"
   }
  ],
  "weapons": [
   {
    "name": "Nightweaver's Looking Glass",
    "note": "Arma exclusiva e melhor opção, com muita Proficiência Elemental e dano de Lunar-Bloom."
   },
   {
    "name": "A Thousand Floating Dreams",
    "note": "Segunda melhor, com mesma PE base e passivo que beneficia aliados."
   },
   {
    "name": "Starcaller's Watch",
    "note": "Boa opção pelo grande bônus de Proficiência Elemental."
   },
   {
    "name": "Sacrificial Fragments",
    "note": "Melhor 4 estrelas; reseta a recarga da habilidade e dá boa PE."
   },
   {
    "name": "Etherlight Spindlelute",
    "note": "Melhor 4 estrelas para os stats recomendados, com Recarga de Energia e PE após a habilidade."
   },
   {
    "name": "Sacrificial Jade",
    "note": "Opção inferior, cujo passivo só ativa fora de campo."
   }
  ],
  "artifacts": [
   {
    "name": "Silken Moon's Serenade",
    "note": "Melhor conjunto: dá PE ao grupo e dano extra de Lunar-Bloom com Ascendant Gleam."
   },
   {
    "name": "Deepwood Memories",
    "note": "Quase obrigatório em times Dendro; reduz a RES Dendro em 30%."
   },
   {
    "name": "Gilded Dreams",
    "note": "Alternativa para mais dano, se outro membro já usar Silken Moon's e Deepwood."
   }
  ],
  "mainStats": [
   {
    "slot": "Areia",
    "value": "Proficiência Elemental, depois Recarga de Energia"
   },
   {
    "slot": "Cálice",
    "value": "Proficiência Elemental"
   },
   {
    "slot": "Tiara",
    "value": "Proficiência Elemental"
   }
  ],
  "substats": "Prioridade: Proficiência Elemental > Recarga de Energia > Taxa CRIT / Dano CRIT.",
  "teams": [
   {
    "name": "Lunar-Bloom",
    "members": [
     {
      "name": "Lauma"
     },
     {
      "name": "Nefer"
     },
     {
      "name": "Nahida"
     },
     {
      "name": "Columbina"
     }
    ],
    "note": "Nefer é o melhor DPS Dendro com Lauma; Columbina aplica Hydro."
   },
   {
    "name": "Lunar-Bloom",
    "members": [
     {
      "name": "Lauma"
     },
     {
      "name": "Nefer"
     },
     {
      "name": "Baizhu"
     },
     {
      "name": "Columbina"
     }
    ],
    "note": "Mesmo núcleo, com Baizhu no suporte."
   },
   {
    "name": "Lunar-Bloom",
    "members": [
     {
      "name": "Lauma"
     },
     {
      "name": "Nefer"
     },
     {
      "name": "Sucrose"
     },
     {
      "name": "Columbina"
     }
    ],
    "note": "Mesmo núcleo, com Sucrose como quarto membro."
   }
  ]
 },
 "flins": {
  "patch": "6.3",
  "sources": [
   {
    "label": "Icy Veins: builds",
    "url": "https://www.icy-veins.com/genshin-impact/flins-guide-best-builds"
   },
   {
    "label": "Icy Veins: equipes",
    "url": "https://www.icy-veins.com/genshin-impact/flins-team-guide"
   }
  ],
  "weapons": [
   {
    "name": "Bloodsoaked Ruins",
    "note": "Arma exclusiva; aumenta dano de Lunar-Charged, Dano CRIT e gera energia."
   },
   {
    "name": "Staff of the Scarlet Sands",
    "note": "Alta Taxa CRIT e ATQ escalando com Proficiência Elemental."
   },
   {
    "name": "Fractured Halo",
    "note": "Boa base e bônus de ATQ após Habilidade ou Ultimate; o escudo é menos confiável."
   },
   {
    "name": "Staff of Homa",
    "note": "Boa arma genérica com Dano CRIT alto e ATQ baseado em Vida."
   },
   {
    "name": "Lumidouce Elegy",
    "note": "Bons stats base e ATQ extra após ativar Burning."
   },
   {
    "name": "Primordial Jade Winged-Spear",
    "note": "5 estrelas confiável com ATQ base e Taxa CRIT altos."
   },
   {
    "name": "Deathmatch",
    "note": "Melhor 4 estrelas, com Taxa CRIT e passivo de ATQ."
   }
  ],
  "artifacts": [
   {
    "name": "Night of the Sky's Unveiling",
    "note": "Melhor escolha: PE no 2 peças e Taxa CRIT e dano Lunar no 4 peças."
   },
   {
    "name": "Thundering Fury",
    "note": "Boa alternativa: Electro DMG no 2 peças e +20% de dano Lunar-Charged no 4 peças."
   }
  ],
  "mainStats": [
   {
    "slot": "Areia",
    "value": "ATQ% ou Proficiência Elemental"
   },
   {
    "slot": "Cálice",
    "value": "ATQ% ou Proficiência Elemental"
   },
   {
    "slot": "Tiara",
    "value": "Taxa CRIT ou Dano CRIT"
   }
  ],
  "substats": "Prioridade: Taxa CRIT / Dano CRIT > ATQ% = Proficiência Elemental > Recarga de Energia (cerca de 120-130%).",
  "teams": [
   {
    "name": "Lunar-Charged",
    "members": [
     {
      "name": "Flins"
     },
     {
      "name": "Columbina"
     },
     {
      "name": "Ineffa"
     },
     {
      "name": "Sucrose"
     }
    ],
    "note": "Ineffa é a melhor parceira e Columbina o melhor Hydro."
   },
   {
    "name": "Lunar-Charged",
    "members": [
     {
      "name": "Flins"
     },
     {
      "name": "Columbina"
     },
     {
      "name": "Ineffa"
     },
     {
      "name": "Aino"
     }
    ],
    "note": "Mesmo núcleo Ineffa e Columbina, com Aino."
   },
   {
    "name": "Lunar-Charged",
    "members": [
     {
      "name": "Flins"
     },
     {
      "name": "Columbina"
     },
     {
      "name": "Ineffa"
     },
     {
      "name": "Jahoda"
     }
    ],
    "note": "Mesmo núcleo Ineffa e Columbina, com Jahoda."
   }
  ]
 },
 "nefer": {
  "patch": "6.3",
  "sources": [
   {
    "label": "Icy Veins: builds",
    "url": "https://www.icy-veins.com/genshin-impact/nefer-guide-best-builds"
   },
   {
    "label": "Icy Veins: equipes",
    "url": "https://www.icy-veins.com/genshin-impact/nefer-team-guide"
   }
  ],
  "weapons": [
   {
    "name": "Reliquary of Truth",
    "note": "Arma exclusiva e melhor opção, com Dano CRIT alto e buffs para Lunar-Bloom."
   },
   {
    "name": "Nightweaver's Looking Glass",
    "note": "Muita Proficiência Elemental e passivo que combina com o Lunar-Bloom dela."
   },
   {
    "name": "Dawning Frost",
    "note": "Dá PE após Ataques Carregados e acertos de Habilidade, mais Dano CRIT."
   },
   {
    "name": "Tome of the Eternal Flow",
    "note": "Aumenta Vida e dano de Ataque Carregado, com Dano CRIT."
   },
   {
    "name": "Starcaller's Watch",
    "note": "Grande bônus de PE e dano extra com escudo ativo."
   },
   {
    "name": "Sunny Morning Sleep-In",
    "note": "Acumula PE com Swirl, Habilidade e Ultimate."
   },
   {
    "name": "Blackmarrow Lantern",
    "note": "Melhor opção gratuita, com bônus de Bloom e Lunar-Bloom."
   }
  ],
  "artifacts": [
   {
    "name": "Night of the Sky's Unveiling",
    "note": "Melhor conjunto atual: +80 PE e aumento de Taxa CRIT e dano Lunar ao time."
   }
  ],
  "mainStats": [
   {
    "slot": "Areia",
    "value": "Proficiência Elemental"
   },
   {
    "slot": "Cálice",
    "value": "Proficiência Elemental"
   },
   {
    "slot": "Tiara",
    "value": "Taxa CRIT ou Dano CRIT"
   }
  ],
  "substats": "Prioridade: Taxa CRIT / Dano CRIT > Proficiência Elemental > Recarga de Energia.",
  "teams": [
   {
    "name": "Lunar-Bloom",
    "members": [
     {
      "name": "Nefer"
     },
     {
      "name": "Columbina"
     },
     {
      "name": "Lauma"
     },
     {
      "name": "Kuki Shinobu"
     }
    ],
    "note": "Lauma é o melhor suporte Dendro e Columbina o melhor Hydro."
   },
   {
    "name": "Lunar-Bloom",
    "members": [
     {
      "name": "Nefer"
     },
     {
      "name": "Columbina"
     },
     {
      "name": "Lauma"
     },
     {
      "name": "Zhongli"
     }
    ],
    "note": "Mesmo núcleo, com Zhongli no quarto slot."
   },
   {
    "name": "Lunar-Bloom",
    "members": [
     {
      "name": "Nefer"
     },
     {
      "name": "Columbina"
     },
     {
      "name": "Lauma"
     },
     {
      "name": "Nahida"
     }
    ],
    "note": "Nahida é a melhor alternativa, com grandes buffs de Proficiência Elemental."
   }
  ]
 },
 "yumemizuki-mizuki": {
  "patch": "7.0",
  "sources": [
   {
    "label": "Icy Veins: builds",
    "url": "https://www.icy-veins.com/genshin-impact/yumemizuki-mizuki-guide-best-builds"
   },
   {
    "label": "Icy Veins: equipes",
    "url": "https://www.icy-veins.com/genshin-impact/yumemizuki-mizuki-team-guide"
   }
  ],
  "weapons": [
   {
    "name": "Sunny Morning Sleep-In",
    "note": "Arma exclusiva com grande bônus de PE, pois dano e buffs escalam com PE."
   },
   {
    "name": "Reliquary of Truth",
    "note": "Boa arma de CRIT e PE que funciona mesmo sem Lunar-Bloom."
   },
   {
    "name": "Starcaller's Watch",
    "note": "Dá PE e bônus de dano a inimigos próximos após criar um escudo."
   },
   {
    "name": "Sacrificial Jade",
    "note": "Dá Vida e PE fora de campo, com Taxa CRIT base alta."
   },
   {
    "name": "A Thousand Floating Dreams",
    "note": "Adiciona PE ou bônus de dano elemental pelos membros do grupo."
   },
   {
    "name": "Wandering Evenstar",
    "note": "Converte PE em ATQ periodicamente; ótima em R5 em times que escalam com ATQ."
   },
   {
    "name": "Etherlight Spindlelute",
    "note": "Boa opção gratuita com PE e Recarga de Energia, mas não é mais obtível."
   }
  ],
  "artifacts": [
   {
    "name": "Gilded Dreams",
    "note": "Melhor conjunto; PE e buffs de 4 peças escalam com o dano dela."
   },
   {
    "name": "Wanderer's Troupe",
    "note": "Misturar 2 peças com Gilded Dreams fica pouco atrás do conjunto completo."
   },
   {
    "name": "Scarlet Proof",
    "note": "Conjunto pensado para Stellar-Swirl, mas não dá PE e perde para Gilded Dreams."
   }
  ],
  "mainStats": [
   {
    "slot": "Areia",
    "value": "Proficiência Elemental"
   },
   {
    "slot": "Cálice",
    "value": "Proficiência Elemental"
   },
   {
    "slot": "Tiara",
    "value": "Taxa CRIT ou Dano CRIT"
   }
  ],
  "substats": "Prioridade: Taxa CRIT / Dano CRIT, depois Proficiência Elemental.",
  "teams": [
   {
    "name": "Stellar-Swirl (Odette + Faruzan)",
    "members": [
     {
      "name": "Yumemizuki Mizuki"
     },
     {
      "name": "Odette"
     },
     {
      "name": "Traveler"
     },
     {
      "name": "Faruzan"
     }
    ],
    "note": "Odette e Viajante Cryo ativam Stellar-Swirl; o buff da Faruzan é forte só no C6."
   },
   {
    "name": "Stellar-Swirl (Odette + Sucrose)",
    "members": [
     {
      "name": "Yumemizuki Mizuki"
     },
     {
      "name": "Odette"
     },
     {
      "name": "Traveler"
     },
     {
      "name": "Sucrose"
     }
    ],
    "note": "Sucrose é a alternativa quando não há Faruzan, com buffs de PE para o time."
   },
   {
    "name": "Stellar-Swirl (Qiqi, sem Odette)",
    "members": [
     {
      "name": "Yumemizuki Mizuki"
     },
     {
      "name": "Traveler"
     },
     {
      "name": "Qiqi"
     },
     {
      "name": "Sucrose"
     }
    ],
    "note": "Qiqi adiciona buff de dano Stellar e cura que compensa a cura fraca da Mizuki."
   }
  ]
 }
}
