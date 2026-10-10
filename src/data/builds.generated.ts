import type { Build } from './builds'

// Gerado a partir de guias (Icy Veins, Genshin-Builds, Genshin.gg). Os ids são os mesmos da lista de personagens.
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
 },
 "aino": {
  "patch": "7.1 (atualizado em 18 set 2026)",
  "sources": [
   {
    "label": "Icy Veins: builds",
    "url": "https://www.icy-veins.com/genshin-impact/aino-guide-best-builds"
   },
   {
    "label": "Icy Veins: equipes",
    "url": "https://www.icy-veins.com/genshin-impact/aino-team-guide"
   }
  ],
  "weapons": [
   {
    "name": "Flame-Forged Insight",
    "note": "Arma gratuita com Proficiência Elemental alta, mas não pode mais ser obtida por quem não a tem."
   },
   {
    "name": "Master Key",
    "note": "Alternativa quase idêntica à anterior, criável de graça em Nod-Krai."
   },
   {
    "name": "Forest Regalia",
    "note": "Recomendada para equipes Lunar-Bloom."
   },
   {
    "name": "Favonius Greatsword",
    "note": "Indicada para equipes com alta necessidade de Energia."
   },
   {
    "name": "Wolf's Gravestone",
    "note": "Geralmente não vale a pena, pois o bônus é pouco confiável e tem pouca duração."
   }
  ],
  "artifacts": [
   {
    "name": "Instructor",
    "note": "Melhor set de suporte geral, dá bônus de Proficiência Elemental à equipe após uma reação."
   },
   {
    "name": "Silken Moon's Serenade",
    "note": "Alternativa forte com ativação do bônus mais conveniente."
   },
   {
    "name": "Deepwood Memories",
    "note": "Recomendado para equipes Lunar-Bloom se ninguém mais o usar."
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
    "value": "Taxa CRIT ou Dano CRIT"
   }
  ],
  "substats": "Prioridade: Taxa CRIT > Dano CRIT > Proficiência Elemental > Recarga de Energia.",
  "teams": [
   {
    "name": "Lunar-Charged",
    "members": [
     {
      "name": "Aino"
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
    "note": "Os grandes bônus de Proficiência Elemental da Sucrose fortalecem a equipe."
   },
   {
    "name": "Lunar-Charged",
    "members": [
     {
      "name": "Aino"
     },
     {
      "name": "Flins"
     },
     {
      "name": "Ineffa"
     },
     {
      "name": "Columbina"
     }
    ],
    "note": "Columbina é o suporte principal e dá a Ressonância Hydro enquanto Aino aplica Hydro fora de campo."
   },
   {
    "name": "Lunar-Charged",
    "members": [
     {
      "name": "Aino"
     },
     {
      "name": "Ineffa"
     },
     {
      "name": "Columbina"
     },
     {
      "name": "Ifa"
     }
    ],
    "note": "Ifa é uma opção mais barata que dá bônus de Dano Lunar-Charged à equipe."
   }
  ]
 },
 "amber": {
  "patch": "7.0 (atualizado em 10 ago 2026)",
  "sources": [
   {
    "label": "Icy Veins: builds",
    "url": "https://www.icy-veins.com/genshin-impact/amber-guide-best-builds"
   },
   {
    "label": "Icy Veins: equipes",
    "url": "https://www.icy-veins.com/genshin-impact/amber-team-guide"
   }
  ],
  "weapons": [
   {
    "name": "The First Great Magic",
    "note": "Aumenta o Dano de Ataque Carregado e dá ATQ com outro personagem Pyro na equipe."
   },
   {
    "name": "Aqua Simulacra",
    "note": "Segunda melhor opção, com Dano CRIT e Vida, mas perde dano sem inimigos por perto."
   },
   {
    "name": "Skyward Harp",
    "note": "Fornece Dano CRIT e um dano físico em área."
   },
   {
    "name": "Ibis Piercer",
    "note": "Uma das melhores opções gratuitas, obtida em evento do TCG."
   },
   {
    "name": "Hamayumi",
    "note": "Boa opção gratuita, criável em Inazuma."
   },
   {
    "name": "Thundering Pulse",
    "note": "Listada entre as demais opções de arco para Sub DPS."
   },
   {
    "name": "Polar Star",
    "note": "Listada entre as demais opções de arco para Sub DPS."
   }
  ],
  "artifacts": [
   {
    "name": "Shimenawa's Reminiscence",
    "note": "Para Sub DPS com Tiro Carregado."
   },
   {
    "name": "Crimson Witch of Flames",
    "note": "Para o estilo Explosive Bunny DPS."
   },
   {
    "name": "Noblesse Oblige",
    "note": "Para a build de suporte."
   }
  ],
  "mainStats": [
   {
    "slot": "Areia",
    "value": "Proficiência Elemental ou ATQ%"
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
  "substats": "Prioridade (Sub DPS): Recarga de Energia > Taxa CRIT/Dano CRIT > Proficiência Elemental > ATQ%.",
  "teams": [
   {
    "name": "Melt",
    "members": [
     {
      "name": "Amber"
     },
     {
      "name": "Rosaria"
     },
     {
      "name": "Nicole"
     },
     {
      "name": "Durin"
     }
    ],
    "note": "O guia diz que Durin e Nicole formam a melhor equipe possível atualmente para Amber."
   },
   {
    "name": "Melt",
    "members": [
     {
      "name": "Amber"
     },
     {
      "name": "Rosaria"
     },
     {
      "name": "Bennett"
     },
     {
      "name": "Kaedehara Kazuha"
     }
    ],
    "note": "Equipe de Melt baseada na aplicação Pyro de Amber e no Cryo."
   },
   {
    "name": "Melt",
    "members": [
     {
      "name": "Amber"
     },
     {
      "name": "Ganyu"
     },
     {
      "name": "Bennett"
     },
     {
      "name": "Layla"
     }
    ],
    "note": "Ganyu é a fonte de dano Cryo e Bennett apoia."
   }
  ]
 },
 "beidou": {
  "patch": "5.8 (guia atualizado em 17 jun 2026 para Stellar Reaction)",
  "sources": [
   {
    "label": "Icy Veins: builds",
    "url": "https://www.icy-veins.com/genshin-impact/beidou-guide-best-builds"
   },
   {
    "label": "Icy Veins: equipes",
    "url": "https://www.icy-veins.com/genshin-impact/beidou-team-guide"
   }
  ],
  "weapons": [
   {
    "name": "A Thousand Blazing Suns",
    "note": "Alto dano fora de campo graças ao ATQ alto e ao dano de Supremo."
   },
   {
    "name": "Wolf's Gravestone",
    "note": "ATQ alto e bônus de ATQ para a equipe contra inimigos abaixo de 30% de vida."
   },
   {
    "name": "Redhorn Stonethresher",
    "note": "Boa pelo Dano CRIT; o efeito de DEF não é útil para Beidou."
   },
   {
    "name": "Fang of the Mountain King",
    "note": "Opção 5 estrelas ofensiva, mas o efeito nem sempre é totalmente aproveitado."
   },
   {
    "name": "The Unforged",
    "note": "ATQ alto, especialmente quando Beidou está com escudo."
   },
   {
    "name": "Verdict",
    "note": "Boa Taxa CRIT e atributos base para o dano de Supremo."
   },
   {
    "name": "Beacon of the Reed Sea",
    "note": "Boa Taxa CRIT e atributos ofensivos flexíveis."
   }
  ],
  "artifacts": [
   {
    "name": "Emblem of Severed Fate",
    "note": "Melhor set na maioria das equipes."
   },
   {
    "name": "Noblesse Oblige",
    "note": "2 peças com 2 de Thundering Fury como alternativa a um set completo de Emblem."
   },
   {
    "name": "Thundering Fury",
    "note": "Usado com 2 peças de Noblesse Oblige como alternativa."
   }
  ],
  "mainStats": [
   {
    "slot": "Areia",
    "value": "ATQ% ou Recarga de Energia"
   },
   {
    "slot": "Cálice",
    "value": "Electro DMG"
   },
   {
    "slot": "Tiara",
    "value": "Taxa CRIT ou Dano CRIT"
   }
  ],
  "substats": "Prioridade: Recarga de Energia confortável > Taxa CRIT/Dano CRIT > ATQ% > Proficiência Elemental.",
  "teams": [
   {
    "name": "Stellar Conduct",
    "members": [
     {
      "name": "Beidou"
     },
     {
      "name": "Sandrone"
     },
     {
      "name": "Yae Miko"
     },
     {
      "name": "Qiqi"
     }
    ],
    "note": "Sandrone habilita Stellar Conduct e é uma das melhores parceiras de Beidou."
   },
   {
    "name": "Stellar Conduct",
    "members": [
     {
      "name": "Beidou"
     },
     {
      "name": "Sandrone"
     },
     {
      "name": "Diona"
     },
     {
      "name": "Qiqi"
     }
    ],
    "note": "Variante que troca Yae Miko por Diona."
   },
   {
    "name": "Stellar Conduct",
    "members": [
     {
      "name": "Beidou"
     },
     {
      "name": "Wriothesley"
     },
     {
      "name": "Sandrone"
     },
     {
      "name": "Diona"
     }
    ],
    "note": "Adiciona Wriothesley ao núcleo com Sandrone."
   }
  ]
 },
 "bennett": {
  "patch": "6.7 (revisado em 6 ago 2026)",
  "sources": [
   {
    "label": "Icy Veins: builds",
    "url": "https://www.icy-veins.com/genshin-impact/bennett-guide-best-builds"
   },
   {
    "label": "Icy Veins: equipes",
    "url": "https://www.icy-veins.com/genshin-impact/bennett-team-guide"
   }
  ],
  "weapons": [
   {
    "name": "Mistsplitter Reforged",
    "note": "Melhor arma para a build de suporte de Supremo."
   },
   {
    "name": "Aquila Favonia",
    "note": "O bônus de Dano Físico é inútil, mas o ATQ base serve ao suporte puro."
   },
   {
    "name": "Skyward Blade",
    "note": "Opção 5 estrelas confortável que reduz a dependência de Recarga de Energia nos artefatos."
   },
   {
    "name": "The Alley Flash",
    "note": "Melhor opção 4 estrelas para o bônus de ATQ."
   },
   {
    "name": "Sapwood Blade",
    "note": "Melhor opção gratuita, criável em Sumeru."
   }
  ],
  "artifacts": [
   {
    "name": "Noblesse Oblige",
    "note": "Recomendação mais padrão, dá +20% de ATQ à equipe após o Supremo."
   },
   {
    "name": "Scroll of the Hero of Cinder City",
    "note": "Alternativa que regenera Energia quando um aliado ativa um Supremo Nightsoul."
   }
  ],
  "mainStats": [
   {
    "slot": "Areia",
    "value": "Recarga de Energia ou Vida% (suporte puro); ATQ% ou Recarga de Energia (suporte de Supremo)"
   },
   {
    "slot": "Cálice",
    "value": "Vida% (suporte puro); Pyro DMG (suporte de Supremo)"
   },
   {
    "slot": "Tiara",
    "value": "Vida% ou Bônus de Cura (suporte puro); Taxa CRIT ou Dano CRIT (suporte de Supremo)"
   }
  ],
  "substats": "Prioridade: Recarga de Energia > Vida% > Vida fixa no suporte puro; no suporte de Supremo, Recarga de Energia > Taxa CRIT/Dano CRIT > Vida% > ATQ%.",
  "teams": [
   {
    "name": "Pyro DPS com Hydro e Anemo",
    "members": [
     {
      "name": "Bennett"
     },
     {
      "name": "Arlecchino"
     },
     {
      "name": "Xingqiu"
     },
     {
      "name": "Sucrose"
     }
    ],
    "note": "Bennett dá o bônus de ATQ ao DPS Pyro."
   },
   {
    "name": "Pyro DPS com Geo e Anemo",
    "members": [
     {
      "name": "Bennett"
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
    "note": "Equipe Pyro que aproveita o bônus de ATQ e a Ressonância Pyro."
   },
   {
    "name": "Cryo DPS",
    "members": [
     {
      "name": "Bennett"
     },
     {
      "name": "Kamisato Ayaka"
     },
     {
      "name": "Shenhe"
     },
     {
      "name": "Furina"
     }
    ],
    "note": "Opção listada no guia sem justificativa específica."
   }
  ]
 },
 "candace": {
  "patch": "7.0 (revisado em 6 ago 2026)",
  "sources": [
   {
    "label": "Icy Veins: builds",
    "url": "https://www.icy-veins.com/genshin-impact/candace-guide-best-builds"
   },
   {
    "label": "Icy Veins: equipes",
    "url": "https://www.icy-veins.com/genshin-impact/candace-team-guide"
   }
  ],
  "weapons": [
   {
    "name": "Favonius Lance",
    "note": "Melhor arma na maioria das builds de suporte pela alta necessidade de Recarga de Energia."
   },
   {
    "name": "Engulfing Lightning",
    "note": "Opção premium que converte Recarga de Energia em ATQ e aumenta o dano pessoal."
   },
   {
    "name": "Staff of Homa",
    "note": "Opção ofensiva forte, mas exige Recarga de Energia vinda de areia e substatus."
   },
   {
    "name": "Skyward Spine",
    "note": "Opção confortável com Recarga de Energia e ATQ base alto."
   },
   {
    "name": "Deathmatch",
    "note": "Para builds focadas em dano pessoal, com boa Taxa CRIT."
   },
   {
    "name": "The Catch",
    "note": "Forte opção gratuita que aumenta o Dano de Supremo e dá Recarga de Energia."
   },
   {
    "name": "Kitain Cross Spear",
    "note": "Pode ser usada em equipe de Vaporize; Proficiência Elemental não é prioridade."
   }
  ],
  "artifacts": [
   {
    "name": "Emblem of Severed Fate",
    "note": "Melhor set na maioria das situações."
   },
   {
    "name": "Noblesse Oblige",
    "note": "Alternativa de suporte se a equipe aproveita bônus de ATQ e ninguém mais usa o set."
   }
  ],
  "mainStats": [
   {
    "slot": "Areia",
    "value": "Vida% ou Recarga de Energia"
   },
   {
    "slot": "Cálice",
    "value": "Vida% ou Hydro DMG"
   },
   {
    "slot": "Tiara",
    "value": "Vida% ou Taxa CRIT"
   }
  ],
  "substats": "Prioridade: Recarga de Energia > Taxa CRIT > Vida% > Vida fixa.",
  "teams": [
   {
    "name": "Vaporize",
    "members": [
     {
      "name": "Candace"
     },
     {
      "name": "Arlecchino"
     },
     {
      "name": "Kaedehara Kazuha"
     },
     {
      "name": "Bennett"
     }
    ],
    "note": "DPS Pyro de Ataque Normal com os bônus de Ataque Normal e a aplicação Hydro de Candace."
   },
   {
    "name": "Vaporize",
    "members": [
     {
      "name": "Candace"
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
    "note": "Mesmo núcleo, com Xilonen no lugar de Kazuha."
   },
   {
    "name": "Vaporize",
    "members": [
     {
      "name": "Candace"
     },
     {
      "name": "Hu Tao"
     },
     {
      "name": "Yelan"
     },
     {
      "name": "Zhongli"
     }
    ],
    "note": "Equipe de Vaporize com Hu Tao como dano Pyro."
   }
  ]
 },
 "charlotte": {
  "patch": "6.0 (atualizado em 28 set 2025)",
  "sources": [
   {
    "label": "Icy Veins: builds",
    "url": "https://www.icy-veins.com/genshin-impact/charlotte-guide-best-builds"
   },
   {
    "label": "Genshin.gg: equipes",
    "url": "https://genshin.gg/characters/charlotte/"
   }
  ],
  "weapons": [
   {
    "name": "Prototype Amber",
    "note": "Melhor opção: regenera Energia com o Supremo e cura, mesmo com Vida como atributo secundário."
   },
   {
    "name": "Favonius Codex",
    "note": "Ótimo suporte, dá muita Recarga de Energia e reduz a necessidade da equipe."
   },
   {
    "name": "Wine and Song",
    "note": "Listada pelo guia sem observações."
   },
   {
    "name": "Thrilling Tales of Dragon Slayers",
    "note": "Listada pelo guia sem observações."
   },
   {
    "name": "Oathsworn Eye",
    "note": "Listada pelo guia sem observações."
   }
  ],
  "artifacts": [
   {
    "name": "Noblesse Oblige",
    "note": "Melhor set para ela."
   },
   {
    "name": "Tenacity of the Millelith",
    "note": "Alternativa se alguém na equipe já usa Noblesse Oblige."
   }
  ],
  "mainStats": [
   {
    "slot": "Areia",
    "value": "Recarga de Energia ou ATQ%"
   },
   {
    "slot": "Cálice",
    "value": "ATQ%"
   },
   {
    "slot": "Tiara",
    "value": "Bônus de Cura, Taxa CRIT (com Favonius Codex) ou ATQ%"
   }
  ],
  "substats": "Prioridade: Recarga de Energia (até o necessário) > ATQ% > Taxa CRIT (com Favonius Codex) > ATQ fixo.",
  "teams": [
   {
    "name": "Wriothesley Freeze",
    "members": [
     {
      "name": "Charlotte"
     },
     {
      "name": "Wriothesley"
     },
     {
      "name": "Xingqiu"
     },
     {
      "name": "Kaedehara Kazuha"
     }
    ],
    "note": "Equipe de Freeze listada no Genshin.gg."
   },
   {
    "name": "Hyperbloom",
    "members": [
     {
      "name": "Charlotte"
     },
     {
      "name": "Furina"
     },
     {
      "name": "Nahida"
     },
     {
      "name": "Raiden Shogun"
     }
    ],
    "note": "Equipe de Hyperbloom listada no Genshin.gg."
   },
   {
    "name": "Burgeon",
    "members": [
     {
      "name": "Charlotte"
     },
     {
      "name": "Thoma"
     },
     {
      "name": "Xingqiu"
     },
     {
      "name": "Nahida"
     }
    ],
    "note": "Equipe de Burgeon listada no Genshin.gg."
   }
  ]
 },
 "chevreuse": {
  "patch": "7.1 (atualizado em 18 set 2026)",
  "sources": [
   {
    "label": "Icy Veins: builds",
    "url": "https://www.icy-veins.com/genshin-impact/chevreuse-guide-best-builds"
   },
   {
    "label": "Icy Veins: equipes",
    "url": "https://www.icy-veins.com/genshin-impact/chevreuse-team-guide"
   }
  ],
  "weapons": [
   {
    "name": "Symphonist of Scents",
    "note": "A melhor e mais recomendada arma para Chevreuse."
   },
   {
    "name": "Staff of Homa",
    "note": "Boa escolha se priorizar o dano, e ainda adiciona Vida."
   },
   {
    "name": "Dialogues of the Desert Sages",
    "note": "Opção 4 estrelas mais recomendada, mas não pode mais ser obtida."
   },
   {
    "name": "Rightful Reward",
    "note": "Próxima melhor opção, com o mesmo efeito e menos Vida%."
   },
   {
    "name": "Favonius Lance",
    "note": "Boa opção 4 estrelas com apoio de Energia, mas sem Vida% e precisa de Taxa CRIT."
   }
  ],
  "artifacts": [
   {
    "name": "Noblesse Oblige",
    "note": "Set de bônus geral, usado a menos que outro membro já o tenha."
   },
   {
    "name": "Scroll of the Hero of Cinder City",
    "note": "Set de bônus geral, melhor quando nenhum suporte Nightsoul o aproveita."
   },
   {
    "name": "Song of Days Past",
    "note": "Só se os dois anteriores não estiverem disponíveis ou não couberem na equipe."
   }
  ],
  "mainStats": [
   {
    "slot": "Areia",
    "value": "Vida% ou ATQ%"
   },
   {
    "slot": "Cálice",
    "value": "Vida% ou Pyro DMG"
   },
   {
    "slot": "Tiara",
    "value": "Vida%, Taxa CRIT, Dano CRIT ou Bônus de Cura"
   }
  ],
  "substats": "Prioridade: Recarga de Energia > Vida% > CRIT > ATQ%.",
  "teams": [
   {
    "name": "Mavuika on-field DPS",
    "members": [
     {
      "name": "Chevreuse"
     },
     {
      "name": "Mavuika"
     },
     {
      "name": "Iansan"
     },
     {
      "name": "Ororon"
     }
    ],
    "note": "Iansan dá bons bônus e Ororon adiciona Electro fora de campo."
   },
   {
    "name": "Arlecchino Pyro DPS",
    "members": [
     {
      "name": "Chevreuse"
     },
     {
      "name": "Arlecchino"
     },
     {
      "name": "Durin"
     },
     {
      "name": "Fischl"
     }
    ],
    "note": "Durin e Fischl dão dano fora de campo e mantêm os dois elementos aplicados."
   },
   {
    "name": "Lyney Pyro DPS",
    "members": [
     {
      "name": "Chevreuse"
     },
     {
      "name": "Lyney"
     },
     {
      "name": "Durin"
     },
     {
      "name": "Fischl"
     }
    ],
    "note": "Durin e Fischl cobrem a aplicação fora de campo para a redução de RES de Chevreuse."
   }
  ]
 },
 "chongyun": {
  "patch": "7.0 (atualizado em 10 ago 2026)",
  "sources": [
   {
    "label": "Icy Veins: builds",
    "url": "https://www.icy-veins.com/genshin-impact/chongyun-guide-best-builds"
   },
   {
    "label": "Icy Veins: equipes",
    "url": "https://www.icy-veins.com/genshin-impact/chongyun-team-guide"
   }
  ],
  "weapons": [
   {
    "name": "Wolf's Gravestone",
    "note": "Melhor opção geral, aumenta o ATQ dele e o da equipe contra inimigos com pouca vida."
   },
   {
    "name": "Beacon of the Reed Sea",
    "note": "Melhor para priorizar dano pessoal, pela alta Taxa CRIT e ATQ%."
   },
   {
    "name": "Serpent Spine",
    "note": "Melhor opção 4 estrelas, mas é arma do Passe de Batalha."
   },
   {
    "name": "Sacrificial Greatsword",
    "note": "Melhor opção totalmente gratuita, pois é criável e pode resetar a recarga da habilidade."
   }
  ],
  "artifacts": [
   {
    "name": "Noblesse Oblige",
    "note": "Recomendação principal, aumenta o ATQ da equipe durante o Supremo."
   },
   {
    "name": "Emblem of Severed Fate",
    "note": "Alternativa se um aliado já usa Noblesse Oblige."
   },
   {
    "name": "Blizzard Strayer",
    "note": "Para foco em dano pessoal, adiciona Dano Cryo e Taxa CRIT."
   }
  ],
  "mainStats": [
   {
    "slot": "Areia",
    "value": "Recarga de Energia ou ATQ%"
   },
   {
    "slot": "Cálice",
    "value": "Cryo DMG"
   },
   {
    "slot": "Tiara",
    "value": "Taxa CRIT ou Dano CRIT"
   }
  ],
  "substats": "Prioridade: Recarga de Energia > Taxa CRIT = Dano CRIT > ATQ%.",
  "teams": [
   {
    "name": "Reverse Melt",
    "members": [
     {
      "name": "Chongyun"
     },
     {
      "name": "Rosaria"
     },
     {
      "name": "Bennett"
     },
     {
      "name": "Xiangling"
     }
    ],
    "note": "A infusão Cryo de Chongyun transforma Rosaria em DPS Cryo em campo."
   },
   {
    "name": "Freeze",
    "members": [
     {
      "name": "Chongyun"
     },
     {
      "name": "Furina"
     },
     {
      "name": "Kamisato Ayaka"
     },
     {
      "name": "Shenhe"
     }
    ],
    "note": "Furina aplica Hydro para o Freeze e Ayaka é o DPS Cryo principal."
   },
   {
    "name": "Freeze",
    "members": [
     {
      "name": "Chongyun"
     },
     {
      "name": "Furina"
     },
     {
      "name": "Skirk"
     },
     {
      "name": "Shenhe"
     }
    ],
    "note": "Skirk assume o papel de DPS Cryo no lugar de Ayaka."
   }
  ]
 },
 "dahlia": {
  "patch": "6.0 (builds atualizadas em 27 set 2025; equipes atualizadas em 10 out 2026)",
  "sources": [
   {
    "label": "Icy Veins: builds",
    "url": "https://www.icy-veins.com/genshin-impact/dahlia-guide-best-builds"
   },
   {
    "label": "Genshin-Builds: equipes",
    "url": "https://genshin-builds.com/en/teams/dahlia"
   }
  ],
  "weapons": [
   {
    "name": "Favonius Sword",
    "note": "Melhor opção quando Dahlia também precisa fornecer Recarga de Energia à equipe."
   },
   {
    "name": "Serenity's Call",
    "note": "Usar quando Recarga de Energia não é necessária; dá muita RE e Vida Máx. aumentada."
   },
   {
    "name": "Key of Khaj-Nisut",
    "note": "Listada como alternativa."
   },
   {
    "name": "The Dockhand's Assistant",
    "note": "Listada como alternativa."
   },
   {
    "name": "Fleuve Cendre Ferryman",
    "note": "Listada como alternativa."
   }
  ],
  "artifacts": [
   {
    "name": "Noblesse Oblige",
    "note": "Com 2 peças de Vida + 2 peças de Vida, se precisar de mais bônus de Vida."
   },
   {
    "name": "Scroll of the Hero of Cinder City",
    "note": "Usar nos demais casos; exige as reações corretas para dar os bônus."
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
  "substats": "Prioridade: Taxa CRIT (com Favonius Sword) > Recarga de Energia (cerca de 200%+) > Vida%.",
  "teams": [
   {
    "name": "Permafrost (Cryo)",
    "members": [
     {
      "name": "Dahlia"
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
    "note": "Reações Cryo geram Void Rifts que alimentam o Supremo de Skirk."
   },
   {
    "name": "Anemo Hypercarry",
    "members": [
     {
      "name": "Dahlia"
     },
     {
      "name": "Wanderer"
     },
     {
      "name": "Faruzan"
     },
     {
      "name": "Bennett"
     }
    ],
    "note": "Faruzan reduz a RES Anemo, Bennett dá ATQ e Dahlia dá velocidade de ataque e escudos."
   },
   {
    "name": "Vaporize",
    "members": [
     {
      "name": "Dahlia"
     },
     {
      "name": "Yoimiya"
     },
     {
      "name": "Yelan"
     },
     {
      "name": "Bennett"
     }
    ],
    "note": "O Hydro fora de campo de Yelan permite Vaporize nos ataques normais de Yoimiya."
   }
  ]
 },
 "barbara": {
  "patch": "sem data na página (Genshin.gg, 2026)",
  "sources": [
   {
    "label": "Genshin.gg: builds",
    "url": "https://genshin.gg/characters/barbara/"
   },
   {
    "label": "Genshin.gg: equipes",
    "url": "https://genshin.gg/characters/barbara/"
   }
  ],
  "weapons": [
   {
    "name": "Thrilling Tales of Dragon Slayers",
    "note": "Primeira opção listada pelo guia."
   },
   {
    "name": "Everlasting Moonglow",
    "note": "Segunda opção listada pelo guia."
   },
   {
    "name": "Prototype Amber",
    "note": "Terceira opção listada pelo guia."
   },
   {
    "name": "Favonius Codex",
    "note": "Quarta opção listada pelo guia."
   },
   {
    "name": "Wine and Song",
    "note": "Quinta opção listada pelo guia."
   }
  ],
  "artifacts": [
   {
    "name": "Maiden Beloved",
    "note": "Conjunto de 4 peças listado como o melhor."
   },
   {
    "name": "Tenacity of the Millelith",
    "note": "Combinado com 2 peças de Maiden Beloved."
   },
   {
    "name": "Ocean-Hued Clam",
    "note": "Combinado com 2 peças de Maiden Beloved."
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
    "value": "Bônus de Cura"
   }
  ],
  "substats": "Prioridade: Vida% > Vida fixa > Recarga de Energia.",
  "teams": [
   {
    "name": "Nilou Bloom",
    "members": [
     {
      "name": "Barbara"
     },
     {
      "name": "Nilou"
     },
     {
      "name": "Xingqiu"
     },
     {
      "name": "Nahida"
     }
    ],
    "note": "Equipe de Bloom listada no Genshin.gg."
   },
   {
    "name": "Ayaka Freeze",
    "members": [
     {
      "name": "Barbara"
     },
     {
      "name": "Kamisato Ayaka"
     },
     {
      "name": "Shenhe"
     },
     {
      "name": "Kaedehara Kazuha"
     }
    ],
    "note": "Equipe de Freeze listada no Genshin.gg."
   },
   {
    "name": "Electro-Charged",
    "members": [
     {
      "name": "Barbara"
     },
     {
      "name": "Fischl"
     },
     {
      "name": "Yae Miko"
     },
     {
      "name": "Kaedehara Kazuha"
     }
    ],
    "note": "Equipe de Electro-Charged listada no Genshin.gg."
   }
  ]
 },
 "collei": {
  "patch": "sem data na página (Genshin.gg, 2026)",
  "sources": [
   {
    "label": "Genshin.gg: builds",
    "url": "https://genshin.gg/characters/collei/"
   },
   {
    "label": "Genshin.gg: equipes",
    "url": "https://genshin.gg/characters/collei/"
   }
  ],
  "weapons": [
   {
    "name": "Elegy for the End",
    "note": "Primeira opção listada pelo guia."
   },
   {
    "name": "Sacrificial Bow",
    "note": "Segunda opção listada pelo guia."
   },
   {
    "name": "Polar Star",
    "note": "Terceira opção listada pelo guia."
   },
   {
    "name": "Favonius Warbow",
    "note": "Quarta opção listada pelo guia."
   },
   {
    "name": "Aqua Simulacra",
    "note": "Quinta opção listada pelo guia."
   }
  ],
  "artifacts": [
   {
    "name": "Deepwood Memories",
    "note": "Conjunto de 4 peças listado como o melhor."
   },
   {
    "name": "Noblesse Oblige",
    "note": "Segunda opção listada pelo guia."
   },
   {
    "name": "Tenacity of the Millelith",
    "note": "Terceira opção listada pelo guia."
   }
  ],
  "mainStats": [
   {
    "slot": "Areia",
    "value": "Recarga de Energia, ATQ% ou Proficiência Elemental"
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
  "substats": "Prioridade: Recarga de Energia > Taxa CRIT/Dano CRIT > ATQ%/Proficiência Elemental.",
  "teams": [
   {
    "name": "Nilou Bloom",
    "members": [
     {
      "name": "Collei"
     },
     {
      "name": "Nilou"
     },
     {
      "name": "Nahida"
     },
     {
      "name": "Sangonomiya Kokomi"
     }
    ],
    "note": "Equipe de Bloom listada no Genshin.gg."
   },
   {
    "name": "Keqing Aggravate",
    "members": [
     {
      "name": "Collei"
     },
     {
      "name": "Keqing"
     },
     {
      "name": "Fischl"
     },
     {
      "name": "Kaedehara Kazuha"
     }
    ],
    "note": "Equipe de Aggravate listada no Genshin.gg."
   },
   {
    "name": "Tighnari Quickswap",
    "members": [
     {
      "name": "Collei"
     },
     {
      "name": "Tighnari"
     },
     {
      "name": "Fischl"
     },
     {
      "name": "Zhongli"
     }
    ],
    "note": "Equipe de Quickswap listada no Genshin.gg."
   }
  ]
 },
 "diona": {
  "patch": "7.0 (atualizado em 10 Aug 2026)",
  "sources": [
   {
    "label": "Icy Veins: builds",
    "url": "https://www.icy-veins.com/genshin-impact/diona-guide-best-builds"
   },
   {
    "label": "Icy Veins: equipes",
    "url": "https://www.icy-veins.com/genshin-impact/diona-team-guide"
   }
  ],
  "weapons": [
   {
    "name": "Sacrificial Bow",
    "note": "Melhor opção: dá 30,6% de Recarga de Energia e pode zerar o tempo de recarga da habilidade para proteger mais vezes."
   },
   {
    "name": "Elegy for the End",
    "note": "Melhor 5 estrelas: 55,1% de Recarga de Energia e buffs para a equipe."
   },
   {
    "name": "Favonius Warbow",
    "note": "Recarga de Energia extra; use Taxa CRIT apenas com esta arma."
   },
   {
    "name": "Silvershower Heartstrings",
    "note": "Fornece Vida extra."
   },
   {
    "name": "Sequence of Solitude",
    "note": "Alternativa listada no guia."
   },
   {
    "name": "End of the Line",
    "note": "Alternativa listada no guia."
   },
   {
    "name": "Recurve Bow",
    "note": "Alternativa listada no guia."
   }
  ],
  "artifacts": [
   {
    "name": "Noblesse Oblige",
    "note": "Principal: aumenta o ATQ da equipe após o Ultimate, ativável a cada rotação com o Sacrificial Bow."
   },
   {
    "name": "Tenacity of the Millelith",
    "note": "2 peças, combinada com Emblem of Severed Fate, se outro membro já usar Noblesse Oblige."
   },
   {
    "name": "Emblem of Severed Fate",
    "note": "2 peças em conjunto com Tenacity of the Millelith para Vida e Recarga de Energia."
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
    "value": "Vida%, depois Bônus de Cura (Taxa CRIT só com Favonius Warbow)"
   }
  ],
  "substats": "Prioridade: Recarga de Energia > Vida% > Vida > Taxa CRIT (apenas com Favonius Warbow).",
  "teams": [
   {
    "name": "Stellar-Swirl",
    "members": [
     {
      "name": "Diona"
     },
     {
      "name": "Sandrone"
     },
     {
      "name": "Odette"
     },
     {
      "name": "Sucrose"
     }
    ],
    "note": "O Ultimate de Diona ativa reações Stellar junto com Swirl."
   },
   {
    "name": "Congelamento",
    "members": [
     {
      "name": "Diona"
     },
     {
      "name": "Furina"
     },
     {
      "name": "Wriothesley"
     },
     {
      "name": "Shenhe"
     }
    ],
    "note": "Controle Cryo com o suporte de Shenhe."
   },
   {
    "name": "Razor Superconduct Shatter",
    "members": [
     {
      "name": "Diona"
     },
     {
      "name": "Razor"
     },
     {
      "name": "Fischl"
     },
     {
      "name": "Xingqiu"
     }
    ],
    "note": "Oz aciona Superconduct, Razor causa Shatter e Diona mantém a equipe protegida."
   }
  ]
 },
 "dori": {
  "patch": "Atualizado em 12 Sep 2025 (revisado para 5.1)",
  "sources": [
   {
    "label": "Icy Veins: builds",
    "url": "https://www.icy-veins.com/genshin-impact/dori-guide-best-builds"
   },
   {
    "label": "Genshin-Builds: equipes",
    "url": "https://genshin-builds.com/en/teams/dori"
   }
  ],
  "weapons": [
   {
    "name": "Favonius Greatsword",
    "note": "Melhor opção: grande Recarga de Energia, ajuda a atingir os 160% mínimos."
   },
   {
    "name": "Sacrificial Greatsword",
    "note": "Alternativa que também aumenta a Recarga de Energia."
   },
   {
    "name": "Katsuragikiri Nagamasa",
    "note": "Alternativa que também aumenta a Recarga de Energia."
   },
   {
    "name": "Forest Regalia",
    "note": "Alternativa que também aumenta a Recarga de Energia."
   }
  ],
  "artifacts": [
   {
    "name": "Ocean-Hued Clam",
    "note": "Geralmente a melhor para cura e suporte, com bom aumento de dano."
   },
   {
    "name": "Gilded Dreams",
    "note": "Foca em Proficiência Elemental; a seguinte melhor opção após Ocean-Hued Clam."
   },
   {
    "name": "Thundering Fury",
    "note": "Também foca em Proficiência Elemental."
   }
  ],
  "mainStats": [
   {
    "slot": "Areia",
    "value": "Recarga de Energia"
   },
   {
    "slot": "Cálice",
    "value": "Proficiência Elemental ou Vida%"
   },
   {
    "slot": "Tiara",
    "value": "Proficiência Elemental ou Vida%"
   }
  ],
  "substats": "Prioridade: Taxa CRIT (com Favonius Greatsword) > Recarga de Energia até o necessário > Proficiência Elemental > Vida%.",
  "teams": [
   {
    "name": "Time Thunder (Electro)",
    "members": [
     {
      "name": "Dori"
     },
     {
      "name": "Raiden Shogun"
     },
     {
      "name": "Yae Miko"
     },
     {
      "name": "Kujou Sara"
     }
    ],
    "note": "Baseado no Ultimate de Raiden; Dori sustenta a equipe e fornece energia."
   },
   {
    "name": "Superconduct",
    "members": [
     {
      "name": "Dori"
     },
     {
      "name": "Eula"
     },
     {
      "name": "Raiden Shogun"
     },
     {
      "name": "Rosaria"
     }
    ],
    "note": "Electro aciona Superconduct e reduz a RES Física, reforçando o Ultimate de Eula."
   },
   {
    "name": "Overload",
    "members": [
     {
      "name": "Dori"
     },
     {
      "name": "Yoimiya"
     },
     {
      "name": "Raiden Shogun"
     },
     {
      "name": "Kaedehara Kazuha"
     }
    ],
    "note": "Pyro de Yoimiya reage com o Electro para causar Overload com frequência."
   }
  ]
 },
 "faruzan": {
  "patch": "7.1 (atualizado em 18 Sep 2026)",
  "sources": [
   {
    "label": "Icy Veins: builds",
    "url": "https://www.icy-veins.com/genshin-impact/faruzan-guide-best-builds"
   },
   {
    "label": "Icy Veins: equipes",
    "url": "https://www.icy-veins.com/genshin-impact/faruzan-team-guide"
   }
  ],
  "weapons": [
   {
    "name": "Favonius Warbow",
    "note": "Geralmente a mais recomendada: alta Recarga de Energia e partículas passivas."
   },
   {
    "name": "Elegy for the End",
    "note": "Muita Recarga de Energia com buffs de Proficiência e ATQ; precisa de C6 para ativar a passiva com confiabilidade."
   },
   {
    "name": "Breezeborne Refrain",
    "note": "Forte com DPS Stellar-Swirl como Vesna, especialmente com refinamento alto."
   },
   {
    "name": "Rainbow Serpent's Rain Bow",
    "note": "Muita Recarga de Energia e ATQ%, mas geralmente inferior ao Favonius."
   }
  ],
  "artifacts": [
   {
    "name": "Tenacity of the Millelith",
    "note": "Normalmente a melhor em C6, com cobertura total do buff; fraca antes disso."
   },
   {
    "name": "Scroll of the Hero of Cinder City",
    "note": "Boa alternativa se outro membro usar Tenacity ou se Faruzan não estiver em C6."
   },
   {
    "name": "Noblesse Oblige",
    "note": "Viável, mas o Scroll é preferido pela duração maior."
   }
  ],
  "mainStats": [
   {
    "slot": "Areia",
    "value": "Recarga de Energia, depois ATQ%"
   },
   {
    "slot": "Cálice",
    "value": "Anemo DMG, depois ATQ%"
   },
   {
    "slot": "Tiara",
    "value": "Taxa CRIT"
   }
  ],
  "substats": "Prioridade: Recarga de Energia (conforme a equipe exigir) > Taxa CRIT / Dano CRIT > ATQ%.",
  "teams": [
   {
    "name": "Vesna Stellar-Swirl",
    "members": [
     {
      "name": "Faruzan"
     },
     {
      "name": "Vesna"
     },
     {
      "name": "Vodyanitsa"
     },
     {
      "name": "Odette"
     }
    ],
    "note": "Vesna causa muito dano Anemo Stellar-Swirl, reforçado por Faruzan."
   },
   {
    "name": "Wanderer Anemo Hexerei",
    "members": [
     {
      "name": "Faruzan"
     },
     {
      "name": "Wanderer"
     },
     {
      "name": "Nicole"
     },
     {
      "name": "Durin"
     }
    ],
    "note": "Wanderer causa só dano Anemo e aproveita todos os buffs; Nicole dá ATQ e Durin reduz RES Anemo."
   },
   {
    "name": "Venti Hexerei",
    "members": [
     {
      "name": "Faruzan"
     },
     {
      "name": "Venti"
     },
     {
      "name": "Nicole"
     },
     {
      "name": "Durin"
     }
    ],
    "note": "Os ataques normais de Venti causam bom dano Anemo com dois personagens Hexerei na equipe."
   }
  ]
 },
 "fischl": {
  "patch": "6.0 (atualizado em 28 Sep 2025)",
  "sources": [
   {
    "label": "Icy Veins: builds",
    "url": "https://www.icy-veins.com/genshin-impact/fischl-guide-best-builds"
   },
   {
    "label": "Genshin-Builds: equipes",
    "url": "https://genshin-builds.com/en/teams/fischl"
   }
  ],
  "weapons": [
   {
    "name": "Polar Star",
    "note": "Melhor no geral, mas exige ativar o efeito antes de invocar Oz, o que pode atrapalhar a rotação."
   },
   {
    "name": "Aqua Simulacra",
    "note": "Alternativa listada no guia."
   },
   {
    "name": "Hunter's Path",
    "note": "Alternativa listada no guia."
   },
   {
    "name": "Thundering Pulse",
    "note": "Alternativa listada no guia."
   },
   {
    "name": "The Stringless",
    "note": "Opção para equipes de Aggravate."
   },
   {
    "name": "Song of Stillness",
    "note": "Uma das melhores 4 estrelas."
   },
   {
    "name": "Chain Breaker",
    "note": "Uma das melhores 4 estrelas."
   }
  ],
  "artifacts": [
   {
    "name": "Golden Troupe",
    "note": "Melhor conjunto, tanto para off-field quanto para Aggravate."
   }
  ],
  "mainStats": [
   {
    "slot": "Areia",
    "value": "ATQ% (ou Proficiência Elemental em Aggravate)"
   },
   {
    "slot": "Cálice",
    "value": "Electro DMG"
   },
   {
    "slot": "Tiara",
    "value": "Taxa CRIT ou Dano CRIT"
   }
  ],
  "substats": "Prioridade: Recarga de Energia (até o necessário) > Taxa CRIT / Dano CRIT > ATQ% > Proficiência Elemental.",
  "teams": [
   {
    "name": "Superconduct",
    "members": [
     {
      "name": "Fischl"
     },
     {
      "name": "Clorinde"
     },
     {
      "name": "Mavuika"
     },
     {
      "name": "Chevreuse"
     }
    ],
    "note": "Reações de Overload ativam a passiva de Chevreuse, que reduz RES e aumenta ATQ."
   },
   {
    "name": "Electro-Charged",
    "members": [
     {
      "name": "Fischl"
     },
     {
      "name": "Chasca"
     },
     {
      "name": "Furina"
     },
     {
      "name": "Bennett"
     }
    ],
    "note": "Fischl e Furina fornecem Electro e Hydro para Chasca; Bennett dá ATQ e cura."
   },
   {
    "name": "Overload",
    "members": [
     {
      "name": "Fischl"
     },
     {
      "name": "Arlecchino"
     },
     {
      "name": "Chevreuse"
     },
     {
      "name": "Bennett"
     }
    ],
    "note": "Time agressivo de Overload com RES reduzida por Chevreuse e buff de Bennett."
   }
  ]
 },
 "freminet": {
  "patch": "6.0 (atualizado em 28 Sep 2025)",
  "sources": [
   {
    "label": "Icy Veins: builds",
    "url": "https://www.icy-veins.com/genshin-impact/freminet-guide-best-builds"
   },
   {
    "label": "Genshin-Builds: equipes",
    "url": "https://genshin-builds.com/en/teams/freminet"
   }
  ],
  "weapons": [
   {
    "name": "Skyward Pride",
    "note": "Melhor para Freminet Físico: alto ATQ base, Recarga de Energia e bônus de dano."
   },
   {
    "name": "Fang of the Mountain King",
    "note": "Alternativa listada no guia."
   },
   {
    "name": "A Thousand Blazing Suns",
    "note": "Alternativa para Físico e a melhor para o build Cryo."
   },
   {
    "name": "Song of Broken Pines",
    "note": "Alternativa listada no guia."
   },
   {
    "name": "Verdict",
    "note": "Alternativa listada no guia."
   },
   {
    "name": "Beacon of the Reed Sea",
    "note": "Alternativa listada no guia."
   },
   {
    "name": "Wolf's Gravestone",
    "note": "Alternativa listada no guia."
   }
  ],
  "artifacts": [
   {
    "name": "Pale Flame",
    "note": "Build Físico: 4 peças, muito melhor que qualquer combinação de 2 peças."
   },
   {
    "name": "Blizzard Strayer",
    "note": "Build Cryo: o guia a chama de, de longe, o melhor conjunto."
   },
   {
    "name": "Golden Troupe",
    "note": "Opção eficiente em resina que serve se você estiver farmando para outros personagens."
   }
  ],
  "mainStats": [
   {
    "slot": "Areia",
    "value": "ATQ%"
   },
   {
    "slot": "Cálice",
    "value": "Dano Físico (Físico) ou Cryo DMG (Cryo)"
   },
   {
    "slot": "Tiara",
    "value": "Taxa CRIT / Dano CRIT"
   }
  ],
  "substats": "Prioridade: Recarga de Energia até o requisito > Taxa CRIT / Dano CRIT > ATQ%.",
  "teams": [
   {
    "name": "Shatter",
    "members": [
     {
      "name": "Freminet"
     },
     {
      "name": "Xingqiu"
     },
     {
      "name": "Fischl"
     },
     {
      "name": "Mika"
     }
    ],
    "note": "Usa Congelamento e Shatter; Fischl pode fornecer Electro para Superconduct."
   },
   {
    "name": "Shatterbloom",
    "members": [
     {
      "name": "Freminet"
     },
     {
      "name": "Nahida"
     },
     {
      "name": "Xingqiu"
     },
     {
      "name": "Kuki Shinobu"
     }
    ],
    "note": "Combina Congelamento, Hyperbloom e Shatter."
   },
   {
    "name": "Hypercarry Físico",
    "members": [
     {
      "name": "Freminet"
     },
     {
      "name": "Fischl"
     },
     {
      "name": "Mika"
     },
     {
      "name": "Zhongli"
     }
    ],
    "note": "Baseado em Superconduct para reduzir a RES Física; Zhongli fornece escudo."
   }
  ]
 },
 "gaming": {
  "patch": "6.0 (atualizado em 1 Oct 2025)",
  "sources": [
   {
    "label": "Icy Veins: builds",
    "url": "https://www.icy-veins.com/genshin-impact/gaming-guide-best-builds"
   },
   {
    "label": "Genshin-Builds: equipes",
    "url": "https://genshin-builds.com/en/teams/gaming"
   }
  ],
  "weapons": [
   {
    "name": "Fruitful Hook",
    "note": "Melhor opção, mas apenas em R5."
   },
   {
    "name": "A Thousand Blazing Suns",
    "note": "A segunda melhor opção."
   },
   {
    "name": "Beacon of the Reed Sea",
    "note": "Poder semelhante a Verdict e Serpent Spine."
   },
   {
    "name": "Verdict",
    "note": "Poder semelhante a Beacon of the Reed Sea e Serpent Spine."
   },
   {
    "name": "Serpent Spine",
    "note": "Poder semelhante a Beacon of the Reed Sea e Verdict."
   },
   {
    "name": "Redhorn Stonethresher",
    "note": "Alternativa listada no guia."
   },
   {
    "name": "Wolf's Gravestone",
    "note": "Alternativa listada no guia."
   }
  ],
  "artifacts": [
   {
    "name": "Crimson Witch of Flames",
    "note": "Muito competitivo; tende a ser melhor em C6."
   },
   {
    "name": "Marechaussee Hunter",
    "note": "Muito competitivo; combina com a mecânica de manipulação de Vida do Gaming."
   },
   {
    "name": "Long Night's Oath",
    "note": "Viável, mas mais fraco; útil se sobrar peças de outros DPS de ataque em queda."
   }
  ],
  "mainStats": [
   {
    "slot": "Areia",
    "value": "Proficiência Elemental, depois ATQ%"
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
  "substats": "Prioridade: Recarga de Energia (até o requisito) > Taxa CRIT / Dano CRIT > Proficiência Elemental > ATQ%.",
  "teams": [
   {
    "name": "Melt",
    "members": [
     {
      "name": "Gaming"
     },
     {
      "name": "Ganyu"
     },
     {
      "name": "Layla"
     },
     {
      "name": "Xianyun"
     }
    ],
    "note": "Ganyu e Layla mantêm o Cryo; o ataque em queda de Gaming causa Melt."
   },
   {
    "name": "Pure Pyro",
    "members": [
     {
      "name": "Gaming"
     },
     {
      "name": "Xiangling"
     },
     {
      "name": "Xianyun"
     },
     {
      "name": "Bennett"
     }
    ],
    "note": "Ataques em queda contínuos de Pyro, com Xianyun e Bennett de suporte."
   },
   {
    "name": "Vaporize",
    "members": [
     {
      "name": "Gaming"
     },
     {
      "name": "Kaedehara Kazuha"
     },
     {
      "name": "Furina"
     },
     {
      "name": "Xianyun"
     }
    ],
    "note": "Pyro de Gaming com Hydro off-field de Furina causa Vaporize."
   }
  ]
 },
 "gorou": {
  "patch": "Luna II (atualizado em 20 Oct 2025)",
  "sources": [
   {
    "label": "Icy Veins: builds",
    "url": "https://www.icy-veins.com/genshin-impact/gorou-guide-best-builds"
   },
   {
    "label": "Genshin-Builds: equipes",
    "url": "https://genshin-builds.com/en/teams/gorou"
   }
  ],
  "weapons": [
   {
    "name": "Favonius Warbow",
    "note": "Melhor opção: gratuita e fornece Recarga de Energia, fazendo de Gorou uma bateria."
   },
   {
    "name": "Sacrificial Bow",
    "note": "Alternativa listada no guia."
   },
   {
    "name": "Elegy for the End",
    "note": "Alternativa listada no guia."
   },
   {
    "name": "The Stringless",
    "note": "Alternativa listada no guia."
   },
   {
    "name": "End of the Line",
    "note": "Alternativa listada no guia."
   }
  ],
  "artifacts": [
   {
    "name": "The Exile",
    "note": "Recomendado: conjunto 4 estrelas com Recarga de Energia, competitivo para Gorou."
   },
   {
    "name": "Emblem of Severed Fate",
    "note": "2 peças com Husk of Opulent Dreams para mais DEF% e Recarga de Energia."
   },
   {
    "name": "Noblesse Oblige",
    "note": "Bom buff de equipe, mas o ATQ é desperdiçado em Gorou; melhor em outro membro."
   }
  ],
  "mainStats": [
   {
    "slot": "Areia",
    "value": "Recarga de Energia"
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
  "substats": "Prioridade: Recarga de Energia até o requisito > DEF% > Taxa CRIT.",
  "teams": [
   {
    "name": "Itto Mono Geo Hypercarry",
    "members": [
     {
      "name": "Gorou"
     },
     {
      "name": "Arataki Itto"
     },
     {
      "name": "Albedo"
     },
     {
      "name": "Zhongli"
     }
    ],
    "note": "Gorou aumenta DEF e Geo DMG de Itto e Albedo; Zhongli dá escudo e buff de ATQ."
   },
   {
    "name": "Geo com Noelle",
    "members": [
     {
      "name": "Gorou"
     },
     {
      "name": "Arataki Itto"
     },
     {
      "name": "Noelle"
     },
     {
      "name": "Zhongli"
     }
    ],
    "note": "Noelle mantém o dano Geo quando o Ultimate de Itto está em recarga."
   },
   {
    "name": "Geo com Jean",
    "members": [
     {
      "name": "Gorou"
     },
     {
      "name": "Arataki Itto"
     },
     {
      "name": "Albedo"
     },
     {
      "name": "Jean"
     }
    ],
    "note": "Jean cura e reduz a RES elemental com Viridescent Venerer."
   }
  ]
 },
 "shikanoin-heizou": {
  "patch": "Atualizado em 12 Sep 2025 (guia sem versão do jogo)",
  "sources": [
   {
    "label": "Icy Veins: builds",
    "url": "https://www.icy-veins.com/genshin-impact/shikanoin-heizou-guide-best-builds"
   },
   {
    "label": "Genshin-Builds: equipes",
    "url": "https://genshin-builds.com/en/teams/shikanoin_heizou"
   }
  ],
  "weapons": [
   {
    "name": "Skyward Atlas",
    "note": "Melhor catalisador 5 estrelas; o buff acumulativo combina com o estilo de combate de Heizou."
   },
   {
    "name": "Kagura's Verity",
    "note": "Alternativa 5 estrelas que pode aumentar ainda mais o dano."
   },
   {
    "name": "The Widsith",
    "note": "Melhor opção 4 estrelas."
   },
   {
    "name": "Sacrificial Fragments",
    "note": "Segunda melhor 4 estrelas, de preferência acima de R3."
   },
   {
    "name": "Mappa Mare",
    "note": "Boa opção gratuita."
   }
  ],
  "artifacts": [
   {
    "name": "Viridescent Venerer",
    "note": "Primeira escolha em 4 peças, pois Heizou causa dano Anemo."
   },
   {
    "name": "Noblesse Oblige",
    "note": "2 peças junto com Viridescent Venerer para aumentar o dano de Ultimate."
   },
   {
    "name": "Gladiator's Finale",
    "note": "2 peças para +18% de ATQ como alternativa."
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
    "value": "Taxa CRIT ou Dano CRIT"
   }
  ],
  "substats": "Prioridade: Recarga de Energia até cerca de 175% > Taxa CRIT > Dano CRIT > ATQ%.",
  "teams": [
   {
    "name": "Anemo Swirl",
    "members": [
     {
      "name": "Shikanoin Heizou"
     },
     {
      "name": "Faruzan"
     },
     {
      "name": "Yelan"
     },
     {
      "name": "Bennett"
     }
    ],
    "note": "Faruzan reforça Swirl e dano Anemo; Yelan fornece Hydro para o Swirl."
   },
   {
    "name": "Vaporize",
    "members": [
     {
      "name": "Shikanoin Heizou"
     },
     {
      "name": "Xingqiu"
     },
     {
      "name": "Xiangling"
     },
     {
      "name": "Bennett"
     }
    ],
    "note": "Pyro de Xiangling e Hydro de Xingqiu causam Vaporize; Heizou reduz RES com Viridescent Venerer."
   },
   {
    "name": "Electro-Charged",
    "members": [
     {
      "name": "Shikanoin Heizou"
     },
     {
      "name": "Xingqiu"
     },
     {
      "name": "Fischl"
     },
     {
      "name": "Sangonomiya Kokomi"
     }
    ],
    "note": "Fischl e Kokomi sustentam Electro-Charged enquanto Heizou espalha elementos."
   }
  ]
 },
 "iansan": {
  "patch": "Atualizado em 20 Jun 2026 (guia revisado para 6.5)",
  "sources": [
   {
    "label": "Icy Veins: builds",
    "url": "https://www.icy-veins.com/genshin-impact/iansan-guide-best-builds"
   },
   {
    "label": "Icy Veins: equipes",
    "url": "https://www.icy-veins.com/genshin-impact/iansan-team-guide"
   }
  ],
  "weapons": [
   {
    "name": "Calamity Queller",
    "note": "Melhor opção: ATQ base muito alto e ATQ%; a Recarga de Energia vem dos artefatos."
   },
   {
    "name": "Engulfing Lightning",
    "note": "Melhor quando a equipe exige muita Recarga de Energia; converte Recarga em ATQ."
   },
   {
    "name": "Favonius Lance",
    "note": "Melhor 4 estrelas para equipes famintas por energia; precisa de Taxa CRIT para ativar a passiva."
   },
   {
    "name": "Missive Windspear",
    "note": "Alternativa gratuita se obtida em evento passado."
   }
  ],
  "artifacts": [
   {
    "name": "Scroll of the Hero of Cinder City",
    "note": "Padrão e quase sempre a melhor escolha."
   },
   {
    "name": "Noblesse Oblige",
    "note": "Use se outro personagem já usar o Scroll ou se Iansan não ativar reações com confiabilidade."
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
    "value": "ATQ% ou Taxa CRIT (Taxa CRIT com Favonius Lance)"
   }
  ],
  "substats": "Prioridade: Recarga de Energia (até os limites necessários) > ATQ% > Taxa CRIT (apenas com Favonius Lance).",
  "teams": [
   {
    "name": "Natlan",
    "members": [
     {
      "name": "Iansan"
     },
     {
      "name": "Kinich"
     },
     {
      "name": "Emilie"
     },
     {
      "name": "Mavuika"
     }
    ],
    "note": "Os DPS de Natlan têm mobilidade suficiente para manter os buffs de Iansan ativos."
   },
   {
    "name": "Natlan com Chasca",
    "members": [
     {
      "name": "Iansan"
     },
     {
      "name": "Chasca"
     },
     {
      "name": "Mavuika"
     },
     {
      "name": "Citlali"
     }
    ],
    "note": "Mesma ideia de equipe Natlan com Iansan como suporte."
   },
   {
    "name": "Overload",
    "members": [
     {
      "name": "Iansan"
     },
     {
      "name": "Arlecchino"
     },
     {
      "name": "Chevreuse"
     },
     {
      "name": "Fischl"
     }
    ],
    "note": "Equipe de Overload listada pelo guia."
   }
  ]
 },
 "kachina": {
  "patch": "6.0 (atualizado em 27 Sep 2025)",
  "sources": [
   {
    "label": "Icy Veins: builds",
    "url": "https://www.icy-veins.com/genshin-impact/kachina-guide-best-builds"
   },
   {
    "label": "Genshin-Builds: equipes",
    "url": "https://genshin-builds.com/en/teams/kachina"
   }
  ],
  "weapons": [
   {
    "name": "Mountain-Bracing Bolt",
    "note": "Melhor opção: aumenta o dano."
   },
   {
    "name": "Favonius Lance",
    "note": "Forte opção de suporte que fornece energia ao grupo."
   },
   {
    "name": "Footprint of the Rainbow",
    "note": "Craftável de Natlan e a melhor para aumentar o ataque."
   },
   {
    "name": "Deathmatch",
    "note": "Alternativa listada no guia."
   },
   {
    "name": "The Catch",
    "note": "Alternativa listada no guia."
   }
  ],
  "artifacts": [
   {
    "name": "Scroll of the Hero of Cinder City",
    "note": "Principal motivo de levar Kachina: grandes buffs de dano enquanto ela está em Bênção da Nightsoul."
   },
   {
    "name": "Husk of Opulent Dreams",
    "note": "Listada entre os melhores artefatos."
   },
   {
    "name": "Tenacity of the Millelith",
    "note": "Listada entre os melhores artefatos."
   }
  ],
  "mainStats": [
   {
    "slot": "Areia",
    "value": "DEF% (equipes Geo) ou Recarga de Energia (sem Geo)"
   },
   {
    "slot": "Cálice",
    "value": "Geo DMG"
   },
   {
    "slot": "Tiara",
    "value": "Taxa CRIT, Dano CRIT ou DEF%"
   }
  ],
  "substats": "Prioridade: Recarga de Energia até o alvo (200-230% sem Geo, 150-180% com Geo) > Taxa CRIT / Dano CRIT > DEF%.",
  "teams": [
   {
    "name": "Vaporize",
    "members": [
     {
      "name": "Kachina"
     },
     {
      "name": "Mualani"
     },
     {
      "name": "Xiangling"
     },
     {
      "name": "Zhongli"
     }
    ],
    "note": "Hydro de Mualani e Pyro de Xiangling causam Vaporize; Kachina reforça o dano."
   },
   {
    "name": "Crystallize Hypercarry",
    "members": [
     {
      "name": "Kachina"
     },
     {
      "name": "Navia"
     },
     {
      "name": "Xiangling"
     },
     {
      "name": "Bennett"
     }
    ],
    "note": "O Geo off-field de Kachina gera cristais que alimentam a habilidade de Navia."
   },
   {
    "name": "Pure Pyro",
    "members": [
     {
      "name": "Kachina"
     },
     {
      "name": "Arlecchino"
     },
     {
      "name": "Kaedehara Kazuha"
     },
     {
      "name": "Bennett"
     }
    ],
    "note": "Kazuha reforça e reduz RES; Kachina dá suporte Geo off-field."
   }
  ]
 },
 "kaeya": {
  "patch": "Luna II (atualizado em 20 Oct 2025)",
  "sources": [
   {
    "label": "Icy Veins: builds",
    "url": "https://www.icy-veins.com/genshin-impact/kaeya-guide-best-builds"
   },
   {
    "label": "Genshin-Builds: equipes",
    "url": "https://genshin-builds.com/en/teams/kaeya"
   }
  ],
  "weapons": [
   {
    "name": "Mistsplitter Reforged",
    "note": "Melhor para Kaeya de Congelamento: alto Dano CRIT e bônus de dano elemental."
   },
   {
    "name": "Light of Foliar Incision",
    "note": "Alternativa viável listada no guia."
   },
   {
    "name": "Absolution",
    "note": "Alternativa viável listada no guia."
   },
   {
    "name": "Haran Geppaku Futsu",
    "note": "Alternativa viável listada no guia."
   },
   {
    "name": "Summit Shaper",
    "note": "Alternativa viável listada no guia."
   },
   {
    "name": "Primordial Jade Cutter",
    "note": "Alternativa viável e melhor para o build Reverse Melt (Taxa CRIT e ATQ altos)."
   },
   {
    "name": "Azurelight",
    "note": "Alternativa viável listada no guia."
   }
  ],
  "artifacts": [
   {
    "name": "Blizzard Strayer",
    "note": "Melhor conjunto para Congelamento: +15% Cryo DMG e Taxa CRIT extra."
   },
   {
    "name": "Emblem of Severed Fate",
    "note": "Para Reverse Melt: muita Recarga de Energia e mais dano de Ultimate."
   }
  ],
  "mainStats": [
   {
    "slot": "Areia",
    "value": "ATQ% (Recarga de Energia no Reverse Melt)"
   },
   {
    "slot": "Cálice",
    "value": "Cryo DMG"
   },
   {
    "slot": "Tiara",
    "value": "Dano CRIT (Taxa CRIT / Dano CRIT no Reverse Melt)"
   }
  ],
  "substats": "Prioridade: Recarga de Energia até o requisito > Dano CRIT > Taxa CRIT > ATQ% (Congelamento).",
  "teams": [
   {
    "name": "Melt Vaporize",
    "members": [
     {
      "name": "Kaeya"
     },
     {
      "name": "Hu Tao"
     },
     {
      "name": "Xingqiu"
     },
     {
      "name": "Zhongli"
     }
    ],
    "note": "Ultimates off-field de Xingqiu e Kaeya causam Vaporize e Melt para Hu Tao."
   },
   {
    "name": "Melt",
    "members": [
     {
      "name": "Kaeya"
     },
     {
      "name": "Chongyun"
     },
     {
      "name": "Xiangling"
     },
     {
      "name": "Bennett"
     }
    ],
    "note": "Cryo de Kaeya derrete em inimigos com Pyro aplicado."
   },
   {
    "name": "Permafrost",
    "members": [
     {
      "name": "Kaeya"
     },
     {
      "name": "Chongyun"
     },
     {
      "name": "Xingqiu"
     },
     {
      "name": "Diona"
     }
    ],
    "note": "Cryo e Hydro causam Congelamento; Diona dá escudo e energia."
   }
  ]
 },
 "kaveh": {
  "patch": "6.0 (atualizado em 27 Sep 2025)",
  "sources": [
   {
    "label": "Icy Veins: builds",
    "url": "https://www.icy-veins.com/genshin-impact/kaveh-guide-best-builds"
   },
   {
    "label": "Genshin-Builds: equipes",
    "url": "https://genshin-builds.com/en/teams/kaveh"
   }
  ],
  "weapons": [
   {
    "name": "Flame-Forged Insight",
    "note": "Melhor opção, a arma de evento."
   },
   {
    "name": "Favonius Greatsword",
    "note": "Opção de suporte que fornece Recarga de Energia."
   },
   {
    "name": "Master Key",
    "note": "Para equipes que não precisam de energia e querem mais Proficiência Elemental."
   },
   {
    "name": "Mailed Flower",
    "note": "Alternativa listada pelo guia."
   },
   {
    "name": "Sacrificial Greatsword",
    "note": "Alternativa listada pelo guia."
   },
   {
    "name": "Makhaira Aquamarine",
    "note": "Alternativa listada pelo guia."
   },
   {
    "name": "Wolf's Gravestone",
    "note": "Alternativa listada pelo guia."
   }
  ],
  "artifacts": [
   {
    "name": "Deepwood Memories",
    "note": "Use no Kaveh se ninguém mais da equipe usar; idealmente um suporte Dendro o equipa."
   },
   {
    "name": "Flower of Paradise Lost",
    "note": "Use quando o Kaveh ativa a maioria das reações de Florescer."
   },
   {
    "name": "Ocean-Hued Clam",
    "note": "Use quando o Kaveh não ativa a maioria das reações de Florescer."
   }
  ],
  "mainStats": [
   {
    "slot": "Areia",
    "value": "Recarga de Energia / Proficiência Elemental"
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
  "substats": "Prioridade: Recarga de Energia (até o necessário) > Proficiência Elemental > Taxa CRIT (com Favonius) > ATQ% > Taxa CRIT / Dano CRIT.",
  "teams": [
   {
    "name": "Bountiful Bloom",
    "members": [
     {
      "name": "Kaveh"
     },
     {
      "name": "Xingqiu"
     },
     {
      "name": "Nilou"
     },
     {
      "name": "Nahida"
     }
    ],
    "note": "Nilou converte os núcleos em Bountiful Cores; Kaveh os detona e amplia o dano com o Burst."
   },
   {
    "name": "Bloom",
    "members": [
     {
      "name": "Kaveh"
     },
     {
      "name": "Xingqiu"
     },
     {
      "name": "Nilou"
     },
     {
      "name": "Baizhu"
     }
    ],
    "note": "Mesma base, com Baizhu aumentando o dano de Florescer e fornecendo cura e escudos."
   },
   {
    "name": "Bountiful Bloom Core",
    "members": [
     {
      "name": "Kaveh"
     },
     {
      "name": "Yelan"
     },
     {
      "name": "Nilou"
     },
     {
      "name": "Nahida"
     }
    ],
    "note": "Yelan e Nahida mantêm Hydro e Dendro fora de campo para gerar núcleos continuamente."
   }
  ]
 },
 "kirara": {
  "patch": "6.0 (atualizado em 27 Sep 2025)",
  "sources": [
   {
    "label": "Icy Veins: builds",
    "url": "https://www.icy-veins.com/genshin-impact/kirara-guide-best-builds"
   },
   {
    "label": "Genshin-Builds: equipes",
    "url": "https://genshin-builds.com/en/teams/kirara"
   }
  ],
  "weapons": [
   {
    "name": "Key of Khaj-Nisut",
    "note": "Melhor opção: maximiza o escudo pela Vida e aumenta a Proficiência Elemental do grupo."
   },
   {
    "name": "Sapwood Blade",
    "note": "Boa opção listada pelo guia."
   },
   {
    "name": "The Dockhand's Assistant",
    "note": "Boa opção listada pelo guia."
   },
   {
    "name": "Serenity's Call",
    "note": "Requer Moonsign."
   },
   {
    "name": "Favonius Sword",
    "note": "Facilita a Recarga de Energia, mas é menos importante."
   },
   {
    "name": "Sacrificial Sword",
    "note": "Alternativa listada pelo guia."
   }
  ],
  "artifacts": [
   {
    "name": "Deepwood Memories",
    "note": "Recomendado em equipes Dendro, pois alguém costuma querer o set; a Kirara dificilmente mantém o efeito ativo."
   },
   {
    "name": "Vourukasha's Glow",
    "note": "Listado junto com Tenacity of the Millelith como boa opção de set."
   },
   {
    "name": "Tenacity of the Millelith",
    "note": "Listado junto com Vourukasha's Glow como boa opção de set."
   }
  ],
  "mainStats": [
   {
    "slot": "Areia",
    "value": "Vida% / Recarga de Energia"
   },
   {
    "slot": "Cálice",
    "value": "Vida%"
   },
   {
    "slot": "Tiara",
    "value": "Vida% / Taxa CRIT (Taxa CRIT com Favonius)"
   }
  ],
  "substats": "Prioridade: Recarga de Energia (até o necessário) > Vida% > Taxa CRIT (com Favonius) > Vida.",
  "teams": [
   {
    "name": "Hyperbloom",
    "members": [
     {
      "name": "Kirara"
     },
     {
      "name": "Kamisato Ayato"
     },
     {
      "name": "Nahida"
     },
     {
      "name": "Kuki Shinobu"
     }
    ],
    "note": "Hydro do Ayato e Dendro de Nahida e Kirara geram núcleos que a Kuki Shinobu (C2) detona."
   },
   {
    "name": "Bloom",
    "members": [
     {
      "name": "Kirara"
     },
     {
      "name": "Nahida"
     },
     {
      "name": "Barbara"
     },
     {
      "name": "Nilou"
     }
    ],
    "note": "Nilou gera Bountiful Cores; dois Hydro prolongam o Burst da Nahida."
   },
   {
    "name": "Spread",
    "members": [
     {
      "name": "Kirara"
     },
     {
      "name": "Alhaitham"
     },
     {
      "name": "Raiden Shogun"
     },
     {
      "name": "Nahida"
     }
    ],
    "note": "Dendro de Alhaitham, Nahida e Kirara com Electro fora de campo da Raiden gera Spread."
   }
  ]
 },
 "kujou-sara": {
  "patch": "7.1 (atualizado em 18 Sep 2026)",
  "sources": [
   {
    "label": "Icy Veins: builds",
    "url": "https://www.icy-veins.com/genshin-impact/kujou-sara-guide-best-builds"
   },
   {
    "label": "Icy Veins: equipes",
    "url": "https://www.icy-veins.com/genshin-impact/kujou-sara-team-guide"
   }
  ],
  "weapons": [
   {
    "name": "Elegy for the End",
    "note": "Geralmente a melhor para o dano da equipe pelo buff de grupo, embora não para o dano da própria Sara."
   },
   {
    "name": "The Daybreak Chronicles",
    "note": "Opção de alto nível listada pelo guia."
   },
   {
    "name": "Polar Star",
    "note": "Opção de alto nível listada pelo guia."
   },
   {
    "name": "Skyward Harp",
    "note": "Bom valor de CRIT e ATQ base alto; melhor que as de 4 estrelas."
   },
   {
    "name": "Thundering Pulse",
    "note": "Opção listada pelo guia."
   },
   {
    "name": "Astral Vulture's Crimson Plumage",
    "note": "Opção listada pelo guia."
   },
   {
    "name": "Mouun's Moon",
    "note": "Opção listada pelo guia."
   }
  ],
  "artifacts": [
   {
    "name": "Noblesse Oblige",
    "note": "Geralmente o melhor set para o dano da equipe, a menos que outro personagem o use."
   },
   {
    "name": "Scroll of the Hero of Cinder City",
    "note": "Alternativa caso um aliado use Noblesse Oblige; ela ainda recebe o bônus de 12% de dano elemental."
   },
   {
    "name": "Emblem of Severed Fate",
    "note": "Geralmente o melhor set para o dano pessoal dela."
   }
  ],
  "mainStats": [
   {
    "slot": "Areia",
    "value": "Recarga de Energia > ATQ%"
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
  "substats": "Prioridade: Recarga de Energia > Taxa CRIT > Dano CRIT > ATQ.",
  "teams": [
   {
    "name": "Electro DPS",
    "members": [
     {
      "name": "Kujou Sara"
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
    "note": "Flins é citado como uma das melhores alternativas à Ineffa."
   },
   {
    "name": "Electro DPS",
    "members": [
     {
      "name": "Kujou Sara"
     },
     {
      "name": "Raiden Shogun"
     },
     {
      "name": "Durin"
     },
     {
      "name": "Chevreuse"
     }
    ],
    "note": "Raiden devolve energia e tem janela de dano curta, com bom tempo ativo dos buffs."
   },
   {
    "name": "Electro DPS",
    "members": [
     {
      "name": "Kujou Sara"
     },
     {
      "name": "Varesa"
     },
     {
      "name": "Durin"
     },
     {
      "name": "Chevreuse"
     }
    ],
    "note": "Varesa troca livremente, ajudando a manter os buffs da Sara ativos."
   }
  ]
 },
 "kuki-shinobu": {
  "patch": "Sem patch indicado (atualizado em 12 Sep 2025; revisado para 4.7)",
  "sources": [
   {
    "label": "Icy Veins: builds",
    "url": "https://www.icy-veins.com/genshin-impact/kuki-shinobu-guide-best-builds"
   },
   {
    "label": "Genshin-Builds: equipes",
    "url": "https://genshin-builds.com/en/teams/kuki_shinobu"
   }
  ],
  "weapons": [
   {
    "name": "Freedom-Sworn",
    "note": "Melhor opção para Hyperbloom e Aggravate."
   },
   {
    "name": "Xiphos' Moonlight",
    "note": "Uma das melhores armas para Hyperbloom."
   },
   {
    "name": "Iron Sting",
    "note": "Alternativa para Hyperbloom."
   },
   {
    "name": "Key of Khaj-Nisut",
    "note": "Alternativa para Hyperbloom e curandeira pura."
   },
   {
    "name": "Toukabou Shigure",
    "note": "Alternativa para Hyperbloom."
   },
   {
    "name": "Favonius Sword",
    "note": "Melhor opção como curandeira pura; fornece energia à equipe."
   },
   {
    "name": "Primordial Jade Cutter",
    "note": "Alternativa para a build de Aggravate."
   }
  ],
  "artifacts": [
   {
    "name": "Flower of Paradise Lost",
    "note": "Set ideal para Hyperbloom."
   },
   {
    "name": "Gilded Dreams",
    "note": "Segunda opção para Hyperbloom; também serve em Aggravate."
   },
   {
    "name": "Tenacity of the Millelith",
    "note": "Para curandeira pura: aumenta a cura e o bônus de 4 peças ajuda a equipe."
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
    "value": "Proficiência Elemental"
   }
  ],
  "substats": "Prioridade (Hyperbloom): Proficiência Elemental > Vida% > Vida > Recarga de Energia.",
  "teams": [
   {
    "name": "Catalyze / Hyperbloom",
    "members": [
     {
      "name": "Kuki Shinobu"
     },
     {
      "name": "Cyno"
     },
     {
      "name": "Nahida"
     },
     {
      "name": "Yelan"
     }
    ],
    "note": "Yelan cria núcleos que a Kuki (C2) detona; Nahida e Cyno mantêm Catalyze."
   },
   {
    "name": "Hyperbloom",
    "members": [
     {
      "name": "Kuki Shinobu"
     },
     {
      "name": "Nahida"
     },
     {
      "name": "Xingqiu"
     },
     {
      "name": "Yelan"
     }
    ],
    "note": "Dois Hydro e um Electro encurtam o intervalo da Nahida e prolongam seu Burst."
   },
   {
    "name": "Thunder (Electro)",
    "members": [
     {
      "name": "Kuki Shinobu"
     },
     {
      "name": "Raiden Shogun"
     },
     {
      "name": "Beidou"
     },
     {
      "name": "Kujou Sara"
     }
    ],
    "note": "Sara C6 dá Dano CRIT Electro; a Kuki cura e carrega Tenacity of the Millelith."
   }
  ]
 },
 "lan-yan": {
  "patch": "7.1 (atualizado em 18 Sep 2026)",
  "sources": [
   {
    "label": "Icy Veins: builds",
    "url": "https://www.icy-veins.com/genshin-impact/lan-yan-guide-best-builds"
   },
   {
    "label": "Icy Veins: equipes",
    "url": "https://www.icy-veins.com/genshin-impact/lan-yan-team-guide"
   }
  ],
  "weapons": [
   {
    "name": "Angelos' Heptades",
    "note": "Melhor opção; o ATQ% e o buff ao personagem ativo também reforçam o escudo."
   },
   {
    "name": "Starcaller's Watch",
    "note": "Buff de dano similar, com Proficiência Elemental em vez de ATQ%."
   },
   {
    "name": "Thrilling Tales of Dragon Slayers",
    "note": "Melhor opção gratuita, com bom buff de ATQ% ao personagem ativo."
   },
   {
    "name": "Hakushin Ring",
    "note": "Útil em equipes Electro, mas exige trocas frequentes."
   },
   {
    "name": "Favonius Codex",
    "note": "Gera partículas de energia; ela precisa de Taxa CRIT razoável."
   },
   {
    "name": "Skyward Atlas",
    "note": "Opção de ATQ alto; Cashflow Supervision é alternativa para CRIT."
   },
   {
    "name": "Oathsworn Eye",
    "note": "Bom ATQ e Recarga de Energia, mas não pode mais ser obtida."
   }
  ],
  "artifacts": [
   {
    "name": "Viridescent Venerer",
    "note": "Recomendado para equipes com DPS Pyro, Hydro, Electro ou Cryo."
   },
   {
    "name": "Scroll of the Hero of Cinder City",
    "note": "Set de suporte reserva quando o Viridescent Venerer não ajuda."
   },
   {
    "name": "Noblesse Oblige",
    "note": "O buff de ATQ só ativa após o Burst, que ela não usa toda rotação."
   }
  ],
  "mainStats": [
   {
    "slot": "Areia",
    "value": "ATQ%"
   },
   {
    "slot": "Cálice",
    "value": "ATQ% / Anemo DMG"
   },
   {
    "slot": "Tiara",
    "value": "ATQ% / Taxa CRIT / Dano CRIT"
   }
  ],
  "substats": "Prioridade: ATQ% > Taxa CRIT / Dano CRIT.",
  "teams": [
   {
    "name": "PHEC",
    "members": [
     {
      "name": "Lan Yan"
     },
     {
      "name": "Wriothesley"
     },
     {
      "name": "Odette"
     },
     {
      "name": "Yae Miko"
     }
    ],
    "note": "Equipe listada pelo guia, sem notas específicas."
   },
   {
    "name": "PHEC (Quicken)",
    "members": [
     {
      "name": "Lan Yan"
     },
     {
      "name": "Nahida"
     },
     {
      "name": "Fischl"
     },
     {
      "name": "Clorinde"
     }
    ],
    "note": "Fischl facilita o Swirl com Electro rápido fora de campo; Clorinde é parceira de destaque."
   },
   {
    "name": "PHEC (Hydro)",
    "members": [
     {
      "name": "Lan Yan"
     },
     {
      "name": "Xilonen"
     },
     {
      "name": "Furina"
     },
     {
      "name": "Neuvillette"
     }
    ],
    "note": "O escudo da Lan Yan beneficia o DPS Hydro Neuvillette."
   }
  ]
 },
 "layla": {
  "patch": "6.0 (atualizado em 27 Sep 2025)",
  "sources": [
   {
    "label": "Icy Veins: builds",
    "url": "https://www.icy-veins.com/genshin-impact/layla-guide-best-builds"
   },
   {
    "label": "Genshin-Builds: equipes",
    "url": "https://genshin-builds.com/en/teams/layla"
   }
  ],
  "weapons": [
   {
    "name": "Key of Khaj-Nisut",
    "note": "Melhor opção para escudeira, escala com Vida."
   },
   {
    "name": "The Dockhand's Assistant",
    "note": "Alternativa que escala com Vida."
   },
   {
    "name": "Serenity's Call",
    "note": "Alternativa listada pelo guia."
   },
   {
    "name": "Favonius Sword",
    "note": "Fornece Recarga de Energia a todo o grupo."
   },
   {
    "name": "Primordial Jade Cutter",
    "note": "Melhor opção para sub DPS; exige Tiara de Dano CRIT com Blizzard Strayer."
   }
  ],
  "artifacts": [
   {
    "name": "Tenacity of the Millelith",
    "note": "Melhor set como escudeira, aumenta Vida e escudo."
   },
   {
    "name": "Blizzard Strayer",
    "note": "Melhor set como sub DPS, principalmente em equipes Freeze."
   },
   {
    "name": "Emblem of Severed Fate",
    "note": "Alternativa que reforça o dano da equipe."
   }
  ],
  "mainStats": [
   {
    "slot": "Areia",
    "value": "Vida% / Recarga de Energia"
   },
   {
    "slot": "Cálice",
    "value": "Vida%"
   },
   {
    "slot": "Tiara",
    "value": "Vida% / Taxa CRIT (Taxa CRIT com Favonius Sword)"
   }
  ],
  "substats": "Prioridade (escudeira): Recarga de Energia (até o necessário) > Vida% > Taxa CRIT (com Favonius Sword) > Vida.",
  "teams": [
   {
    "name": "Permafrost Freeze",
    "members": [
     {
      "name": "Layla"
     },
     {
      "name": "Kamisato Ayaka"
     },
     {
      "name": "Shenhe"
     },
     {
      "name": "Xingqiu"
     }
    ],
    "note": "O Hydro do Xingqiu permite que o Cryo congele os inimigos enquanto Ayaka causa o dano."
   },
   {
    "name": "Melt & Vaporize",
    "members": [
     {
      "name": "Layla"
     },
     {
      "name": "Yoimiya"
     },
     {
      "name": "Yelan"
     },
     {
      "name": "Xingqiu"
     }
    ],
    "note": "Yoimiya é a DPS; Layla aplica Cryo fora de campo e Yelan e Xingqiu fornecem Hydro."
   },
   {
    "name": "Melting",
    "members": [
     {
      "name": "Layla"
     },
     {
      "name": "Ganyu"
     },
     {
      "name": "Xiangling"
     },
     {
      "name": "Xingqiu"
     }
    ],
    "note": "Cryo do Ganyu com o Pyro da Xiangling causa Derreter; Layla fornece o escudo."
   }
  ]
 },
 "lisa": {
  "patch": "Sem patch indicado (atualizado em 12 Sep 2025; revisado para 5.1)",
  "sources": [
   {
    "label": "Icy Veins: builds",
    "url": "https://www.icy-veins.com/genshin-impact/lisa-guide-best-builds"
   },
   {
    "label": "Genshin-Builds: equipes",
    "url": "https://genshin-builds.com/en/teams/lisa"
   }
  ],
  "weapons": [
   {
    "name": "Kagura's Verity",
    "note": "Melhor opção: aumenta o dano da Habilidade em até três acúmulos e dá Dano Elemental extra."
   },
   {
    "name": "Lost Prayer to the Sacred Winds",
    "note": "Concede velocidade de movimento e dano elemental."
   },
   {
    "name": "Solar Pearl",
    "note": "Boa opção geral de 4 estrelas."
   },
   {
    "name": "Thrilling Tales of Dragon Slayers",
    "note": "Opção gratuita recomendada, aumenta o ATQ ao entrar em campo."
   }
  ],
  "artifacts": [
   {
    "name": "Thundering Fury",
    "note": "Melhor set (4 peças), reforça o dano de Aggravate."
   },
   {
    "name": "Gilded Dreams",
    "note": "Segunda opção (4 peças), ambos os bônus amplificam o Dano Elemental."
   },
   {
    "name": "Thundersoother",
    "note": "Opção de 4 peças listada pelo guia."
   }
  ],
  "mainStats": [
   {
    "slot": "Areia",
    "value": "Proficiência Elemental"
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
  "substats": "Prioridade: Taxa CRIT / Dano CRIT > Proficiência Elemental > Recarga de Energia > ATQ% / ATQ.",
  "teams": [
   {
    "name": "Thunder & Overload",
    "members": [
     {
      "name": "Lisa"
     },
     {
      "name": "Raiden Shogun"
     },
     {
      "name": "Kujou Sara"
     },
     {
      "name": "Bennett"
     }
    ],
    "note": "Sara C6 dá Dano CRIT Electro; Lisa aplica Electro fora de campo e causa Sobrecarga com o Pyro do Bennett."
   },
   {
    "name": "Superconduct",
    "members": [
     {
      "name": "Lisa"
     },
     {
      "name": "Eula"
     },
     {
      "name": "Rosaria"
     },
     {
      "name": "Zhongli"
     }
    ],
    "note": "Lisa e Rosaria causam Supercondutor para reduzir a RES Física e potencializar a Eula."
   },
   {
    "name": "Overload",
    "members": [
     {
      "name": "Lisa"
     },
     {
      "name": "Diluc"
     },
     {
      "name": "Kaedehara Kazuha"
     },
     {
      "name": "Bennett"
     }
    ],
    "note": "Lisa fornece Electro fora de campo; Kazuha agrupa inimigos e reduz a RES elemental."
   }
  ]
 },
 "lynette": {
  "patch": "Luna II (atualizado em 20 Oct 2025)",
  "sources": [
   {
    "label": "Icy Veins: builds",
    "url": "https://www.icy-veins.com/genshin-impact/lynette-guide-best-builds"
   },
   {
    "label": "Genshin-Builds: equipes",
    "url": "https://genshin-builds.com/en/teams/lynette"
   }
  ],
  "weapons": [
   {
    "name": "Favonius Sword",
    "note": "Melhor opção para DPS fora de campo devido à alta necessidade de energia."
   },
   {
    "name": "Fleuve Cendre Ferryman",
    "note": "Opção listada pelo guia."
   },
   {
    "name": "Sacrificial Sword",
    "note": "Opção listada pelo guia."
   },
   {
    "name": "Amenoma Kageuchi",
    "note": "Opção listada pelo guia."
   },
   {
    "name": "Skyward Blade",
    "note": "Opção listada pelo guia."
   },
   {
    "name": "Freedom-Sworn",
    "note": "Opção listada pelo guia."
   },
   {
    "name": "Skyrider Sword",
    "note": "Opção listada pelo guia."
   }
  ],
  "artifacts": [
   {
    "name": "Viridescent Venerer",
    "note": "Continua sendo uma das melhores opções gerais."
   },
   {
    "name": "Emblem of Severed Fate",
    "note": "Melhor se outro personagem Anemo já usa Viridescent Venerer; dá muita Recarga de Energia e dano de Burst."
   },
   {
    "name": "Marechaussee Hunter",
    "note": "Forte para a build de DPS em campo, aproveitando a perda de Vida dela."
   }
  ],
  "mainStats": [
   {
    "slot": "Areia",
    "value": "Recarga de Energia / ATQ%"
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
  "substats": "Prioridade (DPS fora de campo): Recarga de Energia (até o necessário) > Taxa CRIT (com Favonius) > Dano CRIT > ATQ% > Proficiência Elemental.",
  "teams": [
   {
    "name": "Vaporize",
    "members": [
     {
      "name": "Lynette"
     },
     {
      "name": "Tartaglia"
     },
     {
      "name": "Xiangling"
     },
     {
      "name": "Bennett"
     }
    ],
    "note": "Tartaglia é o DPS; Lynette reduz as RES com Viridescent Venerer e Bennett dá buff de ATQ."
   },
   {
    "name": "Overload",
    "members": [
     {
      "name": "Lynette"
     },
     {
      "name": "Raiden Shogun"
     },
     {
      "name": "Kujou Sara"
     },
     {
      "name": "Bennett"
     }
    ],
    "note": "Sara precisa de C6 para o Dano CRIT Electro; Lynette agrupa inimigos e reduz as RES."
   },
   {
    "name": "Permafrost Freeze",
    "members": [
     {
      "name": "Lynette"
     },
     {
      "name": "Kamisato Ayaka"
     },
     {
      "name": "Shenhe"
     },
     {
      "name": "Sangonomiya Kokomi"
     }
    ],
    "note": "Shenhe potencializa a Ayaka; Kokomi aplica Hydro para o Congelamento."
   }
  ]
 },
 "mika": {
  "patch": "6.0 (atualizado em 28 Sep 2025)",
  "sources": [
   {
    "label": "Icy Veins: builds",
    "url": "https://www.icy-veins.com/genshin-impact/mika-guide-best-builds"
   },
   {
    "label": "Genshin-Builds: equipes",
    "url": "https://genshin-builds.com/en/teams/mika"
   }
  ],
  "weapons": [
   {
    "name": "Symphonist of Scents",
    "note": "Melhor opção: grandes bônus pela cura do Mika, mas dificulta a Recarga de Energia."
   },
   {
    "name": "Favonius Lance",
    "note": "Ajuda na Recarga de Energia e reduz a necessidade da equipe."
   },
   {
    "name": "Dialogues of the Desert Sages",
    "note": "Menos de suporte, mas escala com Vida%, importante para o Mika."
   },
   {
    "name": "Engulfing Lightning",
    "note": "Opção listada pelo guia."
   },
   {
    "name": "\"The Catch\"",
    "note": "Opção gratuita e fácil de obter."
   },
   {
    "name": "Rightful Reward",
    "note": "Opção listada pelo guia."
   },
   {
    "name": "Prototype Starglitter",
    "note": "Opção gratuita e fácil de obter."
   }
  ],
  "artifacts": [
   {
    "name": "Noblesse Oblige",
    "note": "Melhor escolha, pois aumenta o ATQ da equipe."
   },
   {
    "name": "Ocean-Hued Clam",
    "note": "Segunda opção caso alguém já use Noblesse Oblige."
   }
  ],
  "mainStats": [
   {
    "slot": "Areia",
    "value": "Recarga de Energia / Vida%"
   },
   {
    "slot": "Cálice",
    "value": "Vida%"
   },
   {
    "slot": "Tiara",
    "value": "Bônus de Cura / Taxa CRIT"
   }
  ],
  "substats": "Prioridade: Recarga de Energia (até o necessário) > Taxa CRIT (com Favonius) > Vida% > Vida.",
  "teams": [
   {
    "name": "Superconduct",
    "members": [
     {
      "name": "Mika"
     },
     {
      "name": "Eula"
     },
     {
      "name": "Yae Miko"
     },
     {
      "name": "Nahida"
     }
    ],
    "note": "Yae Miko aplica Electro fora de campo, Nahida ativa Aggravate e Mika cura e aumenta o Dano Físico."
   },
   {
    "name": "Physical",
    "members": [
     {
      "name": "Mika"
     },
     {
      "name": "Eula"
     },
     {
      "name": "Rosaria"
     },
     {
      "name": "Bennett"
     }
    ],
    "note": "Eula é beneficiada pela VEL. ATQ e Dano Físico do Mika; Rosaria reduz a RES Física no C6."
   },
   {
    "name": "Superconduct",
    "members": [
     {
      "name": "Mika"
     },
     {
      "name": "Eula"
     },
     {
      "name": "Raiden Shogun"
     },
     {
      "name": "Bennett"
     }
    ],
    "note": "Raiden fornece Electro para o Supercondutor e aumenta a Recarga de Energia da equipe."
   }
  ]
 },
 "ningguang": {
  "patch": "Sem patch indicado (atualizado em 12 Sep 2025; revisado para 5.1)",
  "sources": [
   {
    "label": "Icy Veins: builds",
    "url": "https://www.icy-veins.com/genshin-impact/ningguang-guide-best-builds"
   },
   {
    "label": "Genshin-Builds: equipes",
    "url": "https://genshin-builds.com/en/teams/ningguang"
   }
  ],
  "weapons": [
   {
    "name": "Lost Prayer to the Sacred Winds",
    "note": "Melhor opção listada pelo guia."
   },
   {
    "name": "Kagura's Verity",
    "note": "Alternativa listada pelo guia."
   },
   {
    "name": "Skyward Atlas",
    "note": "Alternativa listada pelo guia."
   },
   {
    "name": "Solar Pearl",
    "note": "Alternativa listada pelo guia."
   },
   {
    "name": "Mappa Mare",
    "note": "Alternativa listada pelo guia."
   }
  ],
  "artifacts": [
   {
    "name": "Emblem of Severed Fate",
    "note": "4 peças: reforça o dano de ataque carregado ao alternar ataques normais com habilidades."
   },
   {
    "name": "Noblesse Oblige",
    "note": "4 peças: buff de ATQ para a equipe com o Burst; bom ao alternar sub DPS."
   },
   {
    "name": "Archaic Petra",
    "note": "Combinada em 2 peças com Gladiator's Finale para buscar Taxa CRIT e Dano CRIT altos; o guia diz que não há set único ideal."
   }
  ],
  "mainStats": [
   {
    "slot": "Areia",
    "value": "ATQ%"
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
  "substats": "Prioridade: Taxa CRIT > Dano CRIT > ATQ% > ATQ.",
  "teams": [
   {
    "name": "Xiao Core (Hypercarry)",
    "members": [
     {
      "name": "Ningguang"
     },
     {
      "name": "Xiao"
     },
     {
      "name": "Jean"
     },
     {
      "name": "Zhongli"
     }
    ],
    "note": "Ningguang cobre as pausas do Xiao e ativa a Ressonância Geo."
   },
   {
    "name": "Vaporize",
    "members": [
     {
      "name": "Ningguang"
     },
     {
      "name": "Hu Tao"
     },
     {
      "name": "Xingqiu"
     },
     {
      "name": "Zhongli"
     }
    ],
    "note": "Xingqiu aplica Hydro para o Vaporizar do Hu Tao; Ningguang adiciona dano e Ressonância Geo."
   },
   {
    "name": "Electro",
    "members": [
     {
      "name": "Ningguang"
     },
     {
      "name": "Beidou"
     },
     {
      "name": "Fischl"
     },
     {
      "name": "Jean"
     }
    ],
    "note": "Os ataques normais da Ningguang ativam o Electro fora de campo de Beidou e Fischl."
   }
  ]
 },
 "noelle": {
  "patch": "Sem patch indicado (atualizado em 12 Sep 2025; revisado para 5.1)",
  "sources": [
   {
    "label": "Icy Veins: builds",
    "url": "https://www.icy-veins.com/genshin-impact/noelle-guide-best-builds"
   },
   {
    "label": "Genshin-Builds: equipes",
    "url": "https://genshin-builds.com/en/teams/noelle"
   }
  ],
  "weapons": [
   {
    "name": "Redhorn Stonethresher",
    "note": "Melhor opção: Dano CRIT e bônus de dano baseado em DEF combinam com a Noelle."
   },
   {
    "name": "Serpent Spine",
    "note": "Alternativa listada pelo guia."
   },
   {
    "name": "Whiteblind",
    "note": "Alternativa listada pelo guia."
   },
   {
    "name": "Skyward Pride",
    "note": "Alternativa listada pelo guia."
   },
   {
    "name": "Favonius Greatsword",
    "note": "Recomendada na equipe Taser, onde ela vira bateria de energia para Xingqiu e Beidou."
   }
  ],
  "artifacts": [
   {
    "name": "Husk of Opulent Dreams",
    "note": "Set de 4 peças listado pelo guia."
   },
   {
    "name": "Marechaussee Hunter",
    "note": "Ótimo set para a Noelle, especialmente com a Furina."
   },
   {
    "name": "Gladiator's Finale",
    "note": "Set de 4 peças listado pelo guia."
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
    "value": "Taxa CRIT / Dano CRIT"
   }
  ],
  "substats": "Prioridade: Taxa CRIT > Dano CRIT > DEF% > Recarga de Energia > ATQ%.",
  "teams": [
   {
    "name": "Pure Geo",
    "members": [
     {
      "name": "Noelle"
     },
     {
      "name": "Arataki Itto"
     },
     {
      "name": "Gorou"
     },
     {
      "name": "Zhongli"
     }
    ],
    "note": "Itto e Noelle se alternam como DPS; Gorou dá DEF e Geo DMG e Zhongli escudo."
   },
   {
    "name": "Xiao Core",
    "members": [
     {
      "name": "Noelle"
     },
     {
      "name": "Xiao"
     },
     {
      "name": "Jean"
     },
     {
      "name": "Zhongli"
     }
    ],
    "note": "Noelle cobre as pausas do Xiao; Jean dá energia e reduz a RES Anemo."
   },
   {
    "name": "Pure Geo Hypercarry",
    "members": [
     {
      "name": "Noelle"
     },
     {
      "name": "Albedo"
     },
     {
      "name": "Gorou"
     },
     {
      "name": "Zhongli"
     }
    ],
    "note": "Noelle é a DPS focada no Burst, com apoio Geo de Albedo, Gorou e Zhongli."
   }
  ]
 },
 "ororon": {
  "patch": "6.0 (atualizado em 28/09/2025)",
  "sources": [
   {
    "label": "Icy Veins: builds",
    "url": "https://www.icy-veins.com/genshin-impact/ororon-guide-best-builds"
   },
   {
    "label": "Genshin-Builds: equipes",
    "url": "https://genshin-builds.com/en/teams/ororon"
   }
  ],
  "weapons": [
   {
    "name": "Elegy for the End",
    "note": "Melhor arma; equilibra suporte e geração de energia."
   },
   {
    "name": "Polar Star",
    "note": "Alternativa para maior dano."
   },
   {
    "name": "The First Great Magic",
    "note": "Alternativa listada no guia."
   },
   {
    "name": "Favonius Warbow",
    "note": "Alternativa para regeneração de energia."
   },
   {
    "name": "Alley Hunter",
    "note": "Alternativa listada no guia."
   },
   {
    "name": "Chain Breaker",
    "note": "Alternativa listada no guia."
   },
   {
    "name": "Range Gauge",
    "note": "Alternativa listada no guia."
   }
  ],
  "artifacts": [
   {
    "name": "Scroll of the Hero of Cinder City",
    "note": "Geralmente o melhor conjunto; Ororon pode atuar como buffer com ele."
   },
   {
    "name": "Noblesse Oblige",
    "note": "Próxima melhor opção se outro personagem usar o Scroll."
   }
  ],
  "mainStats": [
   {
    "slot": "Areia",
    "value": "ATQ% / Recarga de Energia"
   },
   {
    "slot": "Cálice",
    "value": "Electro DMG"
   },
   {
    "slot": "Tiara",
    "value": "Taxa CRIT ou Dano CRIT"
   }
  ],
  "substats": "Prioridade: Recarga de Energia (até atingir o requisito) > Taxa CRIT / Dano CRIT > ATQ% > Proficiência Elemental.",
  "teams": [
   {
    "name": "Multi-reações",
    "members": [
     {
      "name": "Ororon"
     },
     {
      "name": "Chasca"
     },
     {
      "name": "Furina"
     },
     {
      "name": "Bennett"
     }
    ],
    "note": "Chasca adapta seus tiros aos elementos da equipe; Bennett cura e dá bônus de ATQ."
   },
   {
    "name": "Electro-Charged",
    "members": [
     {
      "name": "Ororon"
     },
     {
      "name": "Clorinde"
     },
     {
      "name": "Furina"
     },
     {
      "name": "Xilonen"
     }
    ],
    "note": "Clorinde e Furina geram Electro-Charged; Xilonen reduz RES e cura."
   },
   {
    "name": "Electro-Charged Cyno hipercarry",
    "members": [
     {
      "name": "Ororon"
     },
     {
      "name": "Cyno"
     },
     {
      "name": "Furina"
     },
     {
      "name": "Xilonen"
     }
    ],
    "note": "Cyno fica em campo e Ororon e Xilonen dão suporte."
   }
  ]
 },
 "razor": {
  "patch": "Atualizado em 02/12/2025 (sem versão de patch indicada)",
  "sources": [
   {
    "label": "Icy Veins: builds",
    "url": "https://www.icy-veins.com/genshin-impact/razor-guide-best-builds"
   },
   {
    "label": "Genshin-Builds: equipes",
    "url": "https://genshin-builds.com/en/teams/razor"
   }
  ],
  "weapons": [
   {
    "name": "Wolf's Gravestone",
    "note": "Melhor arma; grande bônus de ATQ contra inimigos abaixo de 30% de vida."
   },
   {
    "name": "Song of Broken Pines",
    "note": "Dá ATQ fixo constante e buff de ATQ e Vel. de ATQ para a equipe."
   },
   {
    "name": "The Unforged",
    "note": "Alternativa listada no guia."
   },
   {
    "name": "Serpent Spine",
    "note": "Melhor opção gratuita; dá Taxa CRIT e bônus de dano acumulável."
   },
   {
    "name": "Lithic Blade",
    "note": "Alternativa listada no guia."
   },
   {
    "name": "Luxurious Sea-Lord",
    "note": "Alternativa listada no guia."
   }
  ],
  "artifacts": [
   {
    "name": "Pale Flame",
    "note": "Conjunto de 4 peças listado entre os melhores."
   },
   {
    "name": "Gladiator's Finale",
    "note": "Conjunto de 4 peças listado entre os melhores."
   },
   {
    "name": "Bloodstained Chivalry",
    "note": "Usado em combinação de 2 peças com Pale Flame ou Gladiator's Finale."
   }
  ],
  "mainStats": [
   {
    "slot": "Areia",
    "value": "ATQ%"
   },
   {
    "slot": "Cálice",
    "value": "Physical DMG"
   },
   {
    "slot": "Tiara",
    "value": "Taxa CRIT ou Dano CRIT"
   }
  ],
  "substats": "Prioridade: ATQ% > Taxa CRIT > Dano CRIT > Recarga de Energia.",
  "teams": [
   {
    "name": "Overload #1",
    "members": [
     {
      "name": "Razor"
     },
     {
      "name": "Durin"
     },
     {
      "name": "Chevreuse"
     },
     {
      "name": "Bennett"
     }
    ],
    "note": "Três Pyro geram Overload; Chevreuse reduz RES e Bennett buffa."
   },
   {
    "name": "Overload #2",
    "members": [
     {
      "name": "Razor"
     },
     {
      "name": "Fischl"
     },
     {
      "name": "Durin"
     },
     {
      "name": "Bennett"
     }
    ],
    "note": "Fischl adiciona dano Electro fora de campo."
   },
   {
    "name": "Overload #3",
    "members": [
     {
      "name": "Razor"
     },
     {
      "name": "Fischl"
     },
     {
      "name": "Albedo"
     },
     {
      "name": "Bennett"
     }
    ],
    "note": "Albedo adiciona dano Geo, Proficiência Elemental e buffs."
   }
  ]
 },
 "rosaria": {
  "patch": "5.8 (atualizado em 12/09/2025)",
  "sources": [
   {
    "label": "Icy Veins: builds",
    "url": "https://www.icy-veins.com/genshin-impact/rosaria-guide-best-builds"
   },
   {
    "label": "Genshin-Builds: equipes",
    "url": "https://genshin-builds.com/en/teams/rosaria"
   }
  ],
  "weapons": [
   {
    "name": "Staff of the Scarlet Sands",
    "note": "Melhor arma no Reverse Melt, cerca de 10% à frente com Gilded Dreams."
   },
   {
    "name": "Crimson Moon's Semblance",
    "note": "Alternativa para o build Reverse Melt."
   },
   {
    "name": "Staff of Homa",
    "note": "Alternativa para o build Reverse Melt."
   },
   {
    "name": "Lumidouce Elegy",
    "note": "Alternativa para Reverse Melt e para o build de suporte."
   },
   {
    "name": "Calamity Queller",
    "note": "Alternativa para o build Reverse Melt."
   },
   {
    "name": "Favonius Lance",
    "note": "Melhor arma no build de suporte; boa se a equipe precisa de partículas."
   },
   {
    "name": "Deathmatch",
    "note": "Arma do Passe de Batalha, fácil de obter."
   }
  ],
  "artifacts": [
   {
    "name": "Gilded Dreams",
    "note": "Melhor escolha no Reverse Melt, quase empatada com Lavawalker."
   },
   {
    "name": "Lavawalker",
    "note": "Quase empata com Gilded Dreams, mas é mais difícil de farmar."
   },
   {
    "name": "Noblesse Oblige",
    "note": "Usado na maioria dos casos no build de suporte."
   }
  ],
  "mainStats": [
   {
    "slot": "Areia",
    "value": "Proficiência Elemental ou ATQ%"
   },
   {
    "slot": "Cálice",
    "value": "Cryo DMG"
   },
   {
    "slot": "Tiara",
    "value": "Taxa CRIT"
   }
  ],
  "substats": "Prioridade (Reverse Melt): Taxa CRIT > Dano CRIT > Proficiência Elemental > Recarga de Energia > ATQ%.",
  "teams": [
   {
    "name": "Melt/Vaporize com Hu Tao",
    "members": [
     {
      "name": "Rosaria"
     },
     {
      "name": "Hu Tao"
     },
     {
      "name": "Xingqiu"
     },
     {
      "name": "Zhongli"
     }
    ],
    "note": "Vaporize e Melt amplificam Hu Tao; Zhongli dá escudo e ATQ."
   },
   {
    "name": "Superconduct com Eula",
    "members": [
     {
      "name": "Rosaria"
     },
     {
      "name": "Eula"
     },
     {
      "name": "Raiden Shogun"
     },
     {
      "name": "Zhongli"
     }
    ],
    "note": "Superconduct reforça o Burst de Eula."
   },
   {
    "name": "Melt",
    "members": [
     {
      "name": "Rosaria"
     },
     {
      "name": "Chongyun"
     },
     {
      "name": "Kaedehara Kazuha"
     },
     {
      "name": "Bennett"
     }
    ],
    "note": "Chongyun mantém o Cryo para Melt; Kazuha agrupa e Bennett buffa."
   }
  ]
 },
 "sayu": {
  "patch": "Luna II (atualizado em 20/10/2025)",
  "sources": [
   {
    "label": "Icy Veins: builds",
    "url": "https://www.icy-veins.com/genshin-impact/sayu-guide-best-builds"
   },
   {
    "label": "Genshin-Builds: equipes",
    "url": "https://genshin-builds.com/en/teams/sayu"
   }
  ],
  "weapons": [
   {
    "name": "Favonius Greatsword",
    "note": "Melhor arma; exige alguma Taxa CRIT e ajuda a usar o Burst a cada rotação."
   },
   {
    "name": "Wolf's Gravestone",
    "note": "Segunda melhor; dá um pequeno buff à equipe."
   },
   {
    "name": "Katsuragikiri Nagamasa",
    "note": "Melhor opção gratuita; craftável e com boa Recarga de Energia."
   },
   {
    "name": "Flame-Forged Insight",
    "note": "Alternativa listada no guia."
   },
   {
    "name": "Mailed Flower",
    "note": "Alternativa listada no guia."
   },
   {
    "name": "Skyward Pride",
    "note": "Alternativa listada no guia."
   },
   {
    "name": "Sacrificial Greatsword",
    "note": "Alternativa listada no guia."
   }
  ],
  "artifacts": [
   {
    "name": "Viridescent Venerer",
    "note": "Melhor conjunto em campo ou fora; reduz RES e aumenta o Swirl."
   }
  ],
  "mainStats": [
   {
    "slot": "Areia",
    "value": "Recarga de Energia / Proficiência Elemental"
   },
   {
    "slot": "Cálice",
    "value": "ATQ% / Proficiência Elemental"
   },
   {
    "slot": "Tiara",
    "value": "Bônus de Cura / Proficiência Elemental"
   }
  ],
  "substats": "Prioridade: Recarga de Energia > Proficiência Elemental > ATQ% > Taxa CRIT (só com Favonius Greatsword).",
  "teams": [
   {
    "name": "Xiao Swirl",
    "members": [
     {
      "name": "Sayu"
     },
     {
      "name": "Xiao"
     },
     {
      "name": "Chongyun"
     },
     {
      "name": "Zhongli"
     }
    ],
    "note": "Sayu dá energia e Ressonância Anemo; Chongyun (C2) encurta o recarga do Skill de Xiao."
   },
   {
    "name": "Pyro Swirl",
    "members": [
     {
      "name": "Sayu"
     },
     {
      "name": "Xiangling"
     },
     {
      "name": "Albedo"
     },
     {
      "name": "Zhongli"
     }
    ],
    "note": "O Skill de Sayu espalha o Pyro de Xiangling para gerar Swirl."
   },
   {
    "name": "Vaporize com Hu Tao",
    "members": [
     {
      "name": "Sayu"
     },
     {
      "name": "Hu Tao"
     },
     {
      "name": "Zhongli"
     },
     {
      "name": "Xingqiu"
     }
    ],
    "note": "O Burst de Xingqiu aplica Hydro para Vaporize; Sayu cura e reduz RES."
   }
  ]
 },
 "sethos": {
  "patch": "5.4 (guia atualizado em 12/09/2025)",
  "sources": [
   {
    "label": "Icy Veins: builds",
    "url": "https://www.icy-veins.com/genshin-impact/sethos-guide-best-builds"
   },
   {
    "label": "Genshin-Builds: equipes",
    "url": "https://genshin-builds.com/en/teams/sethos"
   }
  ],
  "weapons": [
   {
    "name": "Hunter's Path",
    "note": "Melhor arma."
   },
   {
    "name": "Slingshot",
    "note": "Escolha padrão do guia; a melhor depois de Hunter's Path se o alcance for suficiente."
   },
   {
    "name": "Aqua Simulacra",
    "note": "Alternativa viável listada no guia."
   },
   {
    "name": "Scion of the Blazing Sun",
    "note": "Alternativa viável listada no guia."
   },
   {
    "name": "The First Great Magic",
    "note": "Alternativa viável listada no guia."
   },
   {
    "name": "Skyward Harp",
    "note": "Alternativa viável listada no guia."
   },
   {
    "name": "Song of Stillness",
    "note": "Alternativa viável listada no guia."
   }
  ],
  "artifacts": [
   {
    "name": "Wanderer's Troupe",
    "note": "Recomendado; aumenta Proficiência Elemental e dano de Ataque Carregado."
   },
   {
    "name": "Desert Pavilion Chronicle",
    "note": "Pode ser o melhor se o foco for o Burst em vez do Ataque Carregado."
   },
   {
    "name": "Gilded Dreams",
    "note": "Listado entre os melhores artefatos."
   }
  ],
  "mainStats": [
   {
    "slot": "Areia",
    "value": "Proficiência Elemental ou Recarga de Energia"
   },
   {
    "slot": "Cálice",
    "value": "Electro DMG"
   },
   {
    "slot": "Tiara",
    "value": "Taxa CRIT ou Dano CRIT"
   }
  ],
  "substats": "Prioridade: Recarga de Energia (até o requisito) > Taxa CRIT / Dano CRIT > Proficiência Elemental > ATQ%.",
  "teams": [
   {
    "name": "Aggravate",
    "members": [
     {
      "name": "Sethos"
     },
     {
      "name": "Kaedehara Kazuha"
     },
     {
      "name": "Fischl"
     },
     {
      "name": "Kirara"
     }
    ],
    "note": "Kirara aplica Dendro para Aggravate; Kazuha agrupa e reduz RES."
   },
   {
    "name": "Hyperbloom",
    "members": [
     {
      "name": "Sethos"
     },
     {
      "name": "Nahida"
     },
     {
      "name": "Yelan"
     },
     {
      "name": "Furina"
     }
    ],
    "note": "Yelan e Furina geram núcleos de Bloom que Sethos detona com Electro."
   }
  ]
 },
 "sucrose": {
  "patch": "5.1 (revisado em 22/10/2024; atualizado em 02/12/2025)",
  "sources": [
   {
    "label": "Icy Veins: builds",
    "url": "https://www.icy-veins.com/genshin-impact/sucrose-guide-best-builds"
   },
   {
    "label": "Genshin-Builds: equipes",
    "url": "https://genshin-builds.com/en/teams/sucrose"
   }
  ],
  "weapons": [
   {
    "name": "A Thousand Floating Dreams",
    "note": "Melhor arma; foco total em Proficiência Elemental."
   },
   {
    "name": "Wandering Evenstar",
    "note": "Alternativa listada no guia."
   },
   {
    "name": "Sacrificial Fragments",
    "note": "Alternativa listada no guia."
   },
   {
    "name": "Thrilling Tales of Dragon Slayers",
    "note": "Alternativa listada no guia."
   }
  ],
  "artifacts": [
   {
    "name": "Viridescent Venerer",
    "note": "Recomendado; reduz RES inimiga e aumenta dano Anemo e Swirl."
   },
   {
    "name": "Instructor",
    "note": "Boa para o início do jogo (antes do RA 45) e fácil de obter."
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
    "value": "Proficiência Elemental"
   }
  ],
  "substats": "Prioridade: Recarga de Energia (~120% em campo, ~160% fora) > Proficiência Elemental > Taxa CRIT > Dano CRIT.",
  "teams": [
   {
    "name": "Lunar-Charged",
    "members": [
     {
      "name": "Sucrose"
     },
     {
      "name": "Xingqiu"
     },
     {
      "name": "Fischl"
     },
     {
      "name": "Ineffa"
     }
    ],
    "note": "Xingqiu e Fischl geram Electro-Charged e Ineffa o converte em Lunar-Charged."
   },
   {
    "name": "Vaporize",
    "members": [
     {
      "name": "Sucrose"
     },
     {
      "name": "Klee"
     },
     {
      "name": "Furina"
     },
     {
      "name": "Bennett"
     }
    ],
    "note": "Sucrose agrupa e dá Proficiência Elemental; Klee dispara o Vaporize."
   },
   {
    "name": "Lunar-Bloom",
    "members": [
     {
      "name": "Sucrose"
     },
     {
      "name": "Nefer"
     },
     {
      "name": "Lauma"
     },
     {
      "name": "Aino"
     }
    ],
    "note": "Nefer é a DPS; Sucrose compartilha Proficiência Elemental e agrupa inimigos."
   }
  ]
 },
 "thoma": {
  "patch": "6.1 (atualizado em 26/10/2025)",
  "sources": [
   {
    "label": "Icy Veins: builds",
    "url": "https://www.icy-veins.com/genshin-impact/thoma-guide-best-builds"
   },
   {
    "label": "Genshin-Builds: equipes",
    "url": "https://genshin-builds.com/en/teams/thoma"
   }
  ],
  "weapons": [
   {
    "name": "Kitain Cross Spear",
    "note": "Melhor arma no build Burgeon; aumenta Proficiência Elemental ou Recarga de Energia."
   },
   {
    "name": "Favonius Lance",
    "note": "Pode ser mais forte conforme a equipe, mas exige Taxa CRIT."
   },
   {
    "name": "Dragon's Bane",
    "note": "Alternativa listada no guia."
   },
   {
    "name": "Moonpiercer",
    "note": "Alternativa listada no guia."
   },
   {
    "name": "Black Tassel",
    "note": "Alternativa listada no guia."
   },
   {
    "name": "Rightful Reward",
    "note": "Alternativa listada no guia."
   }
  ],
  "artifacts": [
   {
    "name": "Flower of Paradise Lost",
    "note": "Melhor conjunto no Burgeon; aumenta Proficiência Elemental e dano de Burgeon."
   },
   {
    "name": "Gilded Dreams",
    "note": "Também listado entre os melhores artefatos."
   },
   {
    "name": "Noblesse Oblige",
    "note": "Melhor conjunto no build de suporte com escudo."
   }
  ],
  "mainStats": [
   {
    "slot": "Areia",
    "value": "Recarga de Energia / Proficiência Elemental"
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
  "substats": "Prioridade (Burgeon): Recarga de Energia > Proficiência Elemental > Vida% > Vida.",
  "teams": [
   {
    "name": "Burgeon com Ayato",
    "members": [
     {
      "name": "Thoma"
     },
     {
      "name": "Kamisato Ayato"
     },
     {
      "name": "Yelan"
     },
     {
      "name": "Nahida"
     }
    ],
    "note": "Ayato e Yelan formam núcleos de Bloom que o Burst Pyro de Thoma detona."
   },
   {
    "name": "Burgeon com Xingqiu",
    "members": [
     {
      "name": "Thoma"
     },
     {
      "name": "Nahida"
     },
     {
      "name": "Xingqiu"
     },
     {
      "name": "Yelan"
     }
    ],
    "note": "Xingqiu e Yelan aplicam Hydro ao Dendro de Nahida para Burgeon."
   },
   {
    "name": "Vaporize com Hu Tao",
    "members": [
     {
      "name": "Thoma"
     },
     {
      "name": "Hu Tao"
     },
     {
      "name": "Xingqiu"
     },
     {
      "name": "Kaedehara Kazuha"
     }
    ],
    "note": "Xingqiu mantém o Hydro para Hu Tao; Thoma dá escudos."
   }
  ]
 },
 "xiangling": {
  "patch": "Luna II (atualizado em 02/12/2025)",
  "sources": [
   {
    "label": "Icy Veins: builds",
    "url": "https://www.icy-veins.com/genshin-impact/xiangling-guide-best-builds"
   },
   {
    "label": "Genshin-Builds: equipes",
    "url": "https://genshin-builds.com/en/teams/xiangling"
   }
  ],
  "weapons": [
   {
    "name": "The Catch",
    "note": "Melhor arma; muita Recarga de Energia e fácil de obter em R5 pela pesca."
   },
   {
    "name": "Staff of the Scarlet Sands",
    "note": "Alternativa listada no guia."
   },
   {
    "name": "Favonius Lance",
    "note": "Alternativa listada no guia."
   },
   {
    "name": "Engulfing Lightning",
    "note": "Alternativa listada no guia."
   },
   {
    "name": "Kitain Cross Spear",
    "note": "Alternativa listada no guia."
   },
   {
    "name": "Wavebreaker's Fin",
    "note": "Alternativa listada no guia."
   },
   {
    "name": "Staff of Homa",
    "note": "Alternativa listada no guia."
   }
  ],
  "artifacts": [
   {
    "name": "Emblem of Severed Fate",
    "note": "Melhor conjunto; dá Recarga de Energia e aumenta muito o dano do Burst."
   }
  ],
  "mainStats": [
   {
    "slot": "Areia",
    "value": "ATQ%, Proficiência Elemental ou Recarga de Energia"
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
  "substats": "Prioridade: Recarga de Energia (até o requisito, cerca de 200%+) > Taxa CRIT / Dano CRIT > ATQ% > Proficiência Elemental.",
  "teams": [
   {
    "name": "Vaporize com Tartaglia",
    "members": [
     {
      "name": "Xiangling"
     },
     {
      "name": "Tartaglia"
     },
     {
      "name": "Kaedehara Kazuha"
     },
     {
      "name": "Bennett"
     }
    ],
    "note": "O Burst de Xiangling mantém Pyro para o Hydro de Tartaglia."
   },
   {
    "name": "Vaporize com Kokomi",
    "members": [
     {
      "name": "Xiangling"
     },
     {
      "name": "Sangonomiya Kokomi"
     },
     {
      "name": "Kaedehara Kazuha"
     },
     {
      "name": "Bennett"
     }
    ],
    "note": "Kokomi dispara Vaporize com Skill e Burst."
   },
   {
    "name": "Vaporize com Xingqiu",
    "members": [
     {
      "name": "Xiangling"
     },
     {
      "name": "Xingqiu"
     },
     {
      "name": "Sucrose"
     },
     {
      "name": "Bennett"
     }
    ],
    "note": "O Pyro de Xiangling prepara o Hydro de Xingqiu; Sucrose adiciona buffs."
   }
  ]
 },
 "xingqiu": {
  "patch": "6.7 (revisado em 11/07/2026)",
  "sources": [
   {
    "label": "Icy Veins: builds",
    "url": "https://www.icy-veins.com/genshin-impact/xingqiu-guide-best-builds"
   },
   {
    "label": "Icy Veins: equipes",
    "url": "https://www.icy-veins.com/genshin-impact/xingqiu-team-guide"
   }
  ],
  "weapons": [
   {
    "name": "Primordial Jade Cutter",
    "note": "Melhor para dano pessoal; alta Taxa CRIT, mas sem Recarga de Energia."
   },
   {
    "name": "Sacrificial Sword",
    "note": "Escolha popular; dá Recarga de Energia e pode resetar o recarga do Skill."
   },
   {
    "name": "Favonius Sword",
    "note": "Forte opção de 4 estrelas com muita Recarga; gera partículas em acertos CRIT."
   },
   {
    "name": "Sapwood Blade",
    "note": "Craftável, com ATQ base e Recarga; útil em Hyperbloom."
   },
   {
    "name": "Skyward Blade",
    "note": "Forte opção de 5 estrelas com ATQ base e Recarga altos."
   },
   {
    "name": "Fleuve Cendre Ferryman",
    "note": "Opção gratuita obtida pela pesca, com Recarga de Energia."
   },
   {
    "name": "Wolf-Fang",
    "note": "Boa opção de 4 estrelas do Passe de Batalha, sem Recarga de Energia."
   }
  ],
  "artifacts": [
   {
    "name": "Emblem of Severed Fate",
    "note": "Melhor conjunto em quase todas as situações."
   },
   {
    "name": "Noblesse Oblige",
    "note": "Secundário; menos dano pessoal, mas pode dar mais dano à equipe."
   }
  ],
  "mainStats": [
   {
    "slot": "Areia",
    "value": "Recarga de Energia / ATQ%"
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
  "substats": "Prioridade: Recarga de Energia (até o ponto ideal) > Taxa CRIT / Dano CRIT > ATQ%.",
  "teams": [
   {
    "name": "Vaporize com Arlecchino",
    "members": [
     {
      "name": "Xingqiu"
     },
     {
      "name": "Arlecchino"
     },
     {
      "name": "Sucrose"
     },
     {
      "name": "Bennett"
     }
    ],
    "note": "Os Ataques Normais de Arlecchino ativam o Hydro de Xingqiu para Vaporize."
   },
   {
    "name": "Vaporize com Yanfei",
    "members": [
     {
      "name": "Xingqiu"
     },
     {
      "name": "Yanfei"
     },
     {
      "name": "Sucrose"
     },
     {
      "name": "Bennett"
     }
    ],
    "note": "Mesmo núcleo, com Yanfei como dano principal."
   },
   {
    "name": "Vaporize com Hu Tao",
    "members": [
     {
      "name": "Xingqiu"
     },
     {
      "name": "Hu Tao"
     },
     {
      "name": "Sucrose"
     },
     {
      "name": "Bennett"
     }
    ],
    "note": "Os Ataques Normais de Hu Tao ativam o Hydro de Xingqiu."
   }
  ]
 },
 "xinyan": {
  "patch": "6.1 (atualizado em 26/10/2025)",
  "sources": [
   {
    "label": "Icy Veins: builds",
    "url": "https://www.icy-veins.com/genshin-impact/xinyan-guide-best-builds"
   },
   {
    "label": "Genshin-Builds: equipes",
    "url": "https://genshin-builds.com/en/teams/xinyan"
   }
  ],
  "weapons": [
   {
    "name": "Redhorn Stonethresher",
    "note": "Melhor arma para Xinyan DPS."
   },
   {
    "name": "A Thousand Blazing Suns",
    "note": "Listada entre as melhores opções."
   },
   {
    "name": "Verdict",
    "note": "Ótima alternativa."
   },
   {
    "name": "Serpent Spine",
    "note": "Ótima alternativa."
   },
   {
    "name": "Skyward Pride",
    "note": "Alternativa listada no guia."
   },
   {
    "name": "The Unforged",
    "note": "Alternativa listada no guia."
   },
   {
    "name": "Song of Broken Pines",
    "note": "Alternativa listada no guia."
   }
  ],
  "artifacts": [
   {
    "name": "Marechaussee Hunter",
    "note": "Melhor conjunto (2 peças) quando em equipe com Furina."
   },
   {
    "name": "Pale Flame",
    "note": "Poderoso, mas o efeito de 4 peças é inconsistente."
   },
   {
    "name": "Bloodstained Chivalry",
    "note": "Em 2 peças com Pale Flame, cada um dá 25% de Physical DMG."
   }
  ],
  "mainStats": [
   {
    "slot": "Areia",
    "value": "ATQ% / Recarga de Energia"
   },
   {
    "slot": "Cálice",
    "value": "Physical DMG"
   },
   {
    "slot": "Tiara",
    "value": "Dano CRIT > Taxa CRIT"
   }
  ],
  "substats": "Prioridade (DPS): Dano CRIT > Taxa CRIT > ATQ% > Recarga de Energia > DEF%.",
  "teams": [
   {
    "name": "Físico com Eula",
    "members": [
     {
      "name": "Xinyan"
     },
     {
      "name": "Eula"
     },
     {
      "name": "Beidou"
     },
     {
      "name": "Bennett"
     }
    ],
    "note": "Cryo e Electro geram Superconduct para o dano físico de Eula."
   },
   {
    "name": "Físico com Razor",
    "members": [
     {
      "name": "Xinyan"
     },
     {
      "name": "Razor"
     },
     {
      "name": "Qiqi"
     },
     {
      "name": "Bennett"
     }
    ],
    "note": "Superconduct reduz a RES física, aumentando o dano de Razor."
   },
   {
    "name": "Overload",
    "members": [
     {
      "name": "Xinyan"
     },
     {
      "name": "Fischl"
     },
     {
      "name": "Kaedehara Kazuha"
     },
     {
      "name": "Bennett"
     }
    ],
    "note": "Pyro e Electro mantêm Overload; Kazuha agrupa e reduz RES."
   }
  ]
 },
 "yanfei": {
  "patch": "6.1 (atualizado em 26/10/2025)",
  "sources": [
   {
    "label": "Icy Veins: builds",
    "url": "https://www.icy-veins.com/genshin-impact/yanfei-guide-best-builds"
   },
   {
    "label": "Genshin-Builds: equipes",
    "url": "https://genshin-builds.com/en/teams/yanfei"
   }
  ],
  "weapons": [
   {
    "name": "Surf's Up",
    "note": "Melhor arma para o build DPS."
   },
   {
    "name": "Vivid Notions",
    "note": "Geralmente entre as melhores, se a equipe permitir."
   },
   {
    "name": "Tome of the Eternal Flow",
    "note": "Geralmente entre as melhores, se a equipe permitir."
   },
   {
    "name": "Flowing Purity",
    "note": "Alternativa listada no guia."
   },
   {
    "name": "The Widsith",
    "note": "Alternativa listada no guia."
   },
   {
    "name": "Skyward Atlas",
    "note": "Alternativa listada no guia."
   },
   {
    "name": "Memory of Dust",
    "note": "Alternativa listada no guia."
   }
  ],
  "artifacts": [
   {
    "name": "Crimson Witch of Flames",
    "note": "Foco em CRIT, ATQ e Pyro DMG."
   },
   {
    "name": "Marechaussee Hunter",
    "note": "Melhor conjunto se a equipe usa Furina."
   },
   {
    "name": "Gilded Dreams",
    "note": "Para builds de Proficiência Elemental em equipes Overload."
   }
  ],
  "mainStats": [
   {
    "slot": "Areia",
    "value": "Proficiência Elemental / ATQ%"
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
  "substats": "Prioridade (DPS): Taxa CRIT / Dano CRIT > ATQ% > Proficiência Elemental > Recarga de Energia.",
  "teams": [
   {
    "name": "Vaporize + Burgeon",
    "members": [
     {
      "name": "Yanfei"
     },
     {
      "name": "Yelan"
     },
     {
      "name": "Nahida"
     },
     {
      "name": "Zhongli"
     }
    ],
    "note": "Yelan permite Vaporize e Nahida prepara Burgeon; Zhongli dá escudo."
   },
   {
    "name": "Vaporize com Xingqiu",
    "members": [
     {
      "name": "Yanfei"
     },
     {
      "name": "Xingqiu"
     },
     {
      "name": "Kaedehara Kazuha"
     },
     {
      "name": "Zhongli"
     }
    ],
    "note": "O Burst de Xingqiu aplica Hydro; Kazuha agrupa e buffa."
   },
   {
    "name": "Vaporize com Venti",
    "members": [
     {
      "name": "Yanfei"
     },
     {
      "name": "Xingqiu"
     },
     {
      "name": "Venti"
     },
     {
      "name": "Zhongli"
     }
    ],
    "note": "Venti agrupa e espalha Hydro, facilitando o Vaporize."
   }
  ]
 },
 "yaoyao": {
  "patch": "Atualizado em 12 Set 2025 (sem versão de patch indicada)",
  "sources": [
   {
    "label": "Icy Veins: builds",
    "url": "https://www.icy-veins.com/genshin-impact/yaoyao-guide-best-builds"
   },
   {
    "label": "Genshin-Builds: equipes",
    "url": "https://genshin-builds.com/en/teams/yaoyao"
   }
  ],
  "weapons": [
   {
    "name": "Rightful Reward",
    "note": "Melhor opção focada em cura: lança de Vida que dá Energia quando ela é curada."
   },
   {
    "name": "Moonpiercer",
    "note": "Melhor opção focada em Dendro: bônus forte de ATQ que funciona fora de campo."
   },
   {
    "name": "Favonius Lance",
    "note": "Alternativa com muita Recarga de Energia para a equipe."
   },
   {
    "name": "Black Tassel",
    "note": "Listada como alternativa, sem observações."
   }
  ],
  "artifacts": [
   {
    "name": "Deepwood Memories",
    "note": "Melhor escolha: reduz a RES Dendro dos inimigos atingidos por seus companheiros, mesmo fora de campo."
   },
   {
    "name": "Maiden Beloved",
    "note": "Alternativa 5 estrelas de cura que aumenta sua cura e funciona fora de campo."
   },
   {
    "name": "Tenacity of the Millelith",
    "note": "Buff de equipe, mas geralmente inferior porque Yaoyao não gera escudos."
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
    "value": "Bônus de Cura"
   }
  ],
  "substats": "Prioridade: Recarga de Energia (até atingir o necessário) > Vida% > Vida > Proficiência Elemental.",
  "teams": [
   {
    "name": "Hyperbloom",
    "members": [
     {
      "name": "Yaoyao"
     },
     {
      "name": "Alhaitham"
     },
     {
      "name": "Xingqiu"
     },
     {
      "name": "Raiden Shogun"
     }
    ],
    "note": "Alhaitham aplica Dendro, Xingqiu aplica Hydro e a Habilidade da Raiden dispara Hyperbloom; Yaoyao cura e buffa."
   },
   {
    "name": "Catalyze",
    "members": [
     {
      "name": "Yaoyao"
     },
     {
      "name": "Keqing"
     },
     {
      "name": "Fischl"
     },
     {
      "name": "Kaedehara Kazuha"
     }
    ],
    "note": "Os ataques da Keqing ativam Catalyze em inimigos com Dendro; Kazuha agrupa e buffa."
   },
   {
    "name": "Bloom Hyperdrive",
    "members": [
     {
      "name": "Yaoyao"
     },
     {
      "name": "Kamisato Ayato"
     },
     {
      "name": "Nahida"
     },
     {
      "name": "Nilou"
     }
    ],
    "note": "Funciona melhor apenas com Dendro e Hydro; a passiva da Nilou gera Núcleos Generosos."
   }
  ]
 },
 "yun-jin": {
  "patch": "Atualizado em 12 Set 2025 (revisado para a versão 5.0)",
  "sources": [
   {
    "label": "Icy Veins: builds",
    "url": "https://www.icy-veins.com/genshin-impact/yun-jin-guide-best-builds"
   },
   {
    "label": "Genshin-Builds: equipes",
    "url": "https://genshin-builds.com/en/teams/yun_jin"
   }
  ],
  "weapons": [
   {
    "name": "Engulfing Lightning",
    "note": "Melhor opção 5 estrelas, principalmente pela Recarga de Energia."
   },
   {
    "name": "Footprint of the Rainbow",
    "note": "4 estrelas da 5.0 que aumenta muito a DEF, ajudando o buff baseado em DEF."
   },
   {
    "name": "Favonius Lance",
    "note": "Muito bem avaliada pela Recarga de Energia e geração extra de partículas."
   },
   {
    "name": "The Catch",
    "note": "Listada como alternativa."
   },
   {
    "name": "Kitain Cross Spear",
    "note": "Incluída pela geração de partículas, que ocorre mesmo fora de campo."
   }
  ],
  "artifacts": [
   {
    "name": "Husk of Opulent Dreams",
    "note": "Conjunto recomendado: o bônus de 4 peças aumenta a DEF, ainda mais fora de campo."
   },
   {
    "name": "Emblem of Severed Fate",
    "note": "Usado como 2 peças junto com Husk of Opulent Dreams, para +20% de Recarga de Energia."
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
    "value": "DEF%"
   }
  ],
  "substats": "Prioridade: DEF% > Recarga de Energia > DEF > Taxa CRIT / Dano CRIT.",
  "teams": [
   {
    "name": "Vaporize com Yoimiya",
    "members": [
     {
      "name": "Yun Jin"
     },
     {
      "name": "Yoimiya"
     },
     {
      "name": "Xingqiu"
     },
     {
      "name": "Bennett"
     }
    ],
    "note": "Yun Jin e Bennett potencializam os Ataques Normais da Yoimiya; o Burst do Xingqiu aplica Hydro para Vaporize."
   },
   {
    "name": "Vaporize com Ayato e Hu Tao",
    "members": [
     {
      "name": "Yun Jin"
     },
     {
      "name": "Kamisato Ayato"
     },
     {
      "name": "Hu Tao"
     },
     {
      "name": "Zhongli"
     }
    ],
    "note": "Yun Jin amplifica os Ataques Normais dos dois DPS; Zhongli fornece escudo e ATQ."
   },
   {
    "name": "Vaporize com Ayato e Yoimiya",
    "members": [
     {
      "name": "Yun Jin"
     },
     {
      "name": "Kamisato Ayato"
     },
     {
      "name": "Yoimiya"
     },
     {
      "name": "Zhongli"
     }
    ],
    "note": "Ayato aplica Hydro e a Yoimiya dispara Vaporize; Zhongli dá escudo e suporte de ATQ."
   }
  ]
 },
 "aloy": {
  "patch": "Atualizado em 10 Ago 2026 (versão 7.0)",
  "sources": [
   {
    "label": "Icy Veins: builds",
    "url": "https://www.icy-veins.com/genshin-impact/aloy-guide-best-builds"
   },
   {
    "label": "Icy Veins: equipes",
    "url": "https://www.icy-veins.com/genshin-impact/aloy-team-guide"
   }
  ],
  "weapons": [
   {
    "name": "Thundering Pulse",
    "note": "Melhor arma para Aloy: grande Dano CRIT, ATQ% e Dano de Ataque Normal crescente com os acúmulos."
   },
   {
    "name": "Polar Star",
    "note": "Aumenta o Dano de Habilidade e Burst; busque ao menos 2 acúmulos de Ashen Nightstar."
   },
   {
    "name": "Prototype Crescent",
    "note": "Melhor opção gratuita, com bom ATQ% e fácil de forjar."
   }
  ],
  "artifacts": [
   {
    "name": "Noblesse Oblige",
    "note": "Principal recomendação: +20% de Dano de Burst e buff de ATQ para a equipe."
   },
   {
    "name": "Emblem of Severed Fate",
    "note": "Outra opção para aumentar o Dano de Burst via Recarga de Energia."
   },
   {
    "name": "Blizzard Strayer",
    "note": "Aumenta o dano pessoal com Dano Cryo e Taxa CRIT, especialmente em equipes Freeze."
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
    "value": "Taxa CRIT ou Dano CRIT"
   }
  ],
  "substats": "Prioridade: Recarga de Energia até o necessário > Dano CRIT = Taxa CRIT > ATQ%.",
  "teams": [
   {
    "name": "Freeze",
    "members": [
     {
      "name": "Aloy"
     },
     {
      "name": "Furina"
     },
     {
      "name": "Kamisato Ayaka"
     },
     {
      "name": "Jean"
     }
    ],
    "note": "Furina habilita Marechaussee Hunter; Jean cura e reúne os inimigos nas bombas da Aloy."
   },
   {
    "name": "Melt",
    "members": [
     {
      "name": "Aloy"
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
    "note": "Bennett buffa o ATQ, Xiangling aplica Pyro e Kazuha traz Swirl."
   },
   {
    "name": "Freeze sem Furina",
    "members": [
     {
      "name": "Aloy"
     },
     {
      "name": "Ganyu"
     },
     {
      "name": "Sangonomiya Kokomi"
     },
     {
      "name": "Shenhe"
     }
    ],
    "note": "Opção sem Furina que usa o Hydro da Kokomi para o Freeze."
   }
  ]
 },
 "durin": {
  "patch": "Revisado para a versão 6.7 (6 Ago 2026)",
  "sources": [
   {
    "label": "Icy Veins: builds",
    "url": "https://www.icy-veins.com/genshin-impact/durin-guide-best-builds"
   },
   {
    "label": "Icy Veins: equipes",
    "url": "https://www.icy-veins.com/genshin-impact/durin-team-guide"
   }
  ],
  "weapons": [
   {
    "name": "Athame Artis",
    "note": "Arma exclusiva e melhor escolha: aumenta o dano de Burst e dá ATQ à equipe."
   },
   {
    "name": "Primordial Jade Cutter",
    "note": "Alternativa forte com Taxa CRIT e ATQ."
   },
   {
    "name": "Mistsplitter Reforged",
    "note": "Opção 5 estrelas sólida com bônus de dano elemental."
   },
   {
    "name": "Azurelight",
    "note": "Aumenta o ATQ após usar a Habilidade, com efeito extra com 0 de Energia."
   },
   {
    "name": "Haran Geppaku Futsu",
    "note": "Dá bônus de dano de todos os elementos e dano de Ataque Normal."
   },
   {
    "name": "Absolution",
    "note": "Aumenta o Dano CRIT e o dano via mecânica Bond of Life."
   },
   {
    "name": "Wolf-Fang",
    "note": "4 estrelas do Passe de Batalha; bom em R5, fraco em R1."
   }
  ],
  "artifacts": [
   {
    "name": "Emblem of Severed Fate",
    "note": "Geralmente o melhor conjunto do Durin: Recarga de Energia e dano de Burst."
   },
   {
    "name": "Noblesse Oblige",
    "note": "Dá ATQ à equipe após o Burst; muito usado no Modo Luz."
   },
   {
    "name": "Marechaussee Hunter",
    "note": "Melhor para jogar em campo, especialmente com a Furina."
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
    "value": "Taxa CRIT ou Dano CRIT"
   }
  ],
  "substats": "Prioridade: Recarga de Energia (100-150%) > Taxa CRIT / Dano CRIT > ATQ% > Proficiência Elemental.",
  "teams": [
   {
    "name": "Durin DPS principal",
    "members": [
     {
      "name": "Durin"
     },
     {
      "name": "Furina"
     },
     {
      "name": "Mona"
     },
     {
      "name": "Bennett"
     }
    ],
    "note": "Durin é o DPS principal, com Mona como parceira Hexerei."
   },
   {
    "name": "Durin com Overload",
    "members": [
     {
      "name": "Durin"
     },
     {
      "name": "Fischl"
     },
     {
      "name": "Chevreuse"
     },
     {
      "name": "Bennett"
     }
    ],
    "note": "Durin como DPS, apoiado por Fischl e Chevreuse."
   },
   {
    "name": "Overload com Klee",
    "members": [
     {
      "name": "Durin"
     },
     {
      "name": "Klee"
     },
     {
      "name": "Nicole"
     },
     {
      "name": "Fischl"
     }
    ],
    "note": "Equipe de Overload com Klee como DPS."
   }
  ]
 },
 "nicole": {
  "patch": "Atualizado em 10 Jul 2026 (versão 7.0)",
  "sources": [
   {
    "label": "Icy Veins: builds",
    "url": "https://www.icy-veins.com/genshin-impact/nicole-guide-best-builds"
   },
   {
    "label": "Icy Veins: equipes",
    "url": "https://www.icy-veins.com/genshin-impact/nicole-team-guide"
   }
  ],
  "weapons": [
   {
    "name": "Angelos' Heptades",
    "note": "Arma exclusiva: ATQ alto maximiza o buff e dá Dano%; sempre use se tiver."
   },
   {
    "name": "Starcaller's Watch",
    "note": "Mesmo buff de Dano% da Heptades, com duração maior; geralmente a segunda melhor."
   },
   {
    "name": "Skyward Atlas",
    "note": "Melhor opção da banner padrão; o ATQ é suficiente para maximizar o buff."
   },
   {
    "name": "Thrilling Tales of Dragon Slayers",
    "note": "Melhor opção gratuita; funciona melhor em rotações de 20s ou mais."
   },
   {
    "name": "Oathsworn Eye",
    "note": "Boa opção gratuita com ATQ e Recarga de Energia, mas não é mais obtível."
   },
   {
    "name": "Favonius Codex",
    "note": "Dá Recarga de Energia e partículas, mas exige investimento em Taxa CRIT."
   }
  ],
  "artifacts": [
   {
    "name": "Celestial Gift",
    "note": "Melhor conjunto: 2 peças dão Recarga de Energia e 4 peças dão bônus elemental à equipe."
   },
   {
    "name": "Noblesse Oblige",
    "note": "Alternativa se outro membro já usar Celestial Gift; ativa com o Burst."
   },
   {
    "name": "A Day Carved From Rising Winds",
    "note": "Opção de 2 peças de ATQ% se Celestial Gift estiver com outro suporte."
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
    "value": "ATQ% ou Taxa CRIT"
   }
  ],
  "substats": "Prioridade: ATQ% > Recarga de Energia > Taxa CRIT (importante principalmente com Favonius Codex).",
  "teams": [
   {
    "name": "Anemo DPS",
    "members": [
     {
      "name": "Nicole"
     },
     {
      "name": "Varka"
     },
     {
      "name": "Durin"
     },
     {
      "name": "Prune"
     }
    ],
    "note": "Companheiros Hexerei que escalam com ATQ."
   },
   {
    "name": "Geo DPS",
    "members": [
     {
      "name": "Nicole"
     },
     {
      "name": "Navia"
     },
     {
      "name": "Durin"
     },
     {
      "name": "Albedo"
     }
    ],
    "note": "Albedo é DPS Geo e suporte Hexerei."
   },
   {
    "name": "Dendro DPS",
    "members": [
     {
      "name": "Nicole"
     },
     {
      "name": "Durin"
     },
     {
      "name": "Emilie"
     },
     {
      "name": "Kinich"
     }
    ],
    "note": "Emilie e Kinich aproveitam bem os buffs fora de campo da Nicole."
   }
  ]
 },
 "vesna": {
  "patch": "Atualizado em 22 Set 2026",
  "sources": [
   {
    "label": "Icy Veins: builds",
    "url": "https://www.icy-veins.com/genshin-impact/vesna-guide-best-builds"
   },
   {
    "label": "Icy Veins: equipes",
    "url": "https://www.icy-veins.com/genshin-impact/vesna-team-guide"
   }
  ],
  "weapons": [
   {
    "name": "Beyond the Chrysalis",
    "note": "Exclusiva 5 estrelas: grande Dano CRIT e bônus de dano Stellar-Swirl; provavelmente não é necessária."
   },
   {
    "name": "Whitelake Frostfeather",
    "note": "Boa alternativa 5 estrelas que funciona bem com reações Stellar."
   },
   {
    "name": "New Bough",
    "note": "4 estrelas de gacha em R5 com Dano CRIT, ATQ e dano Stellar-Swirl."
   },
   {
    "name": "Emberwell",
    "note": "Forjável em Snezhnaya, gratuita e decente."
   },
   {
    "name": "Silver Light",
    "note": "4 estrelas de evento que aumenta a Proficiência Elemental ao usar a Habilidade."
   }
  ],
  "artifacts": [
   {
    "name": "Scarlet Proof",
    "note": "Geralmente o melhor: ATQ e bônus de Taxa CRIT e dano Stellar-Swirl."
   },
   {
    "name": "Viridescent Venerer",
    "note": "Alternativa, em geral 1-2% abaixo; melhor sem outro personagem Anemo na equipe."
   }
  ],
  "mainStats": [
   {
    "slot": "Areia",
    "value": "ATQ%"
   },
   {
    "slot": "Cálice",
    "value": "ATQ%"
   },
   {
    "slot": "Tiara",
    "value": "Taxa CRIT ou Dano CRIT"
   }
  ],
  "substats": "Prioridade: Taxa CRIT > Dano CRIT > ATQ% ≥ Proficiência Elemental > Recarga de Energia.",
  "teams": [
   {
    "name": "Stellar-Swirl com Vodyanitsa",
    "members": [
     {
      "name": "Vesna"
     },
     {
      "name": "Vodyanitsa"
     },
     {
      "name": "Faruzan"
     },
     {
      "name": "Odette"
     }
    ],
    "note": "Vodyanitsa reduz a RES Anemo e cura; Odette é um forte sub-DPS Stellar fora de campo."
   },
   {
    "name": "Stellar-Swirl com Escoffier",
    "members": [
     {
      "name": "Vesna"
     },
     {
      "name": "Vodyanitsa"
     },
     {
      "name": "Faruzan"
     },
     {
      "name": "Escoffier"
     }
    ],
    "note": "Escoffier adiciona dano fora de campo e aplica Cryo de forma consistente."
   },
   {
    "name": "Stellar-Swirl com Nicole",
    "members": [
     {
      "name": "Vesna"
     },
     {
      "name": "Venti"
     },
     {
      "name": "Nicole"
     },
     {
      "name": "Odette"
     }
    ],
    "note": "Nicole dá um grande buff de ATQ à equipe que também aumenta o dano do Vortex Stellar-Swirl."
   }
  ]
 },
 "illuga": {
  "patch": "Atualizado em 22 Set 2026 (revisado para a versão 7.1)",
  "sources": [
   {
    "label": "Icy Veins: builds",
    "url": "https://www.icy-veins.com/genshin-impact/illuga-guide-best-builds"
   },
   {
    "label": "Icy Veins: equipes",
    "url": "https://www.icy-veins.com/genshin-impact/illuga-team-guide"
   }
  ],
  "weapons": [
   {
    "name": "Dragon's Bane",
    "note": "Opção base: 221 de Proficiência Elemental, ideal quando a Energia não é problema."
   },
   {
    "name": "Favonius Lance",
    "note": "Melhor opção do guia: Recarga de Energia e Energia para a equipe, com algum investimento em Taxa CRIT."
   },
   {
    "name": "Kitain Cross Spear",
    "note": "Meio-termo: Proficiência Elemental e dano de Habilidade, com alguma Energia."
   }
  ],
  "artifacts": [
   {
    "name": "Silken Moon's Serenade",
    "note": "Recomendado a partir de C2: Recarga de Energia e buff de PE e dano Lunar à equipe."
   }
  ],
  "mainStats": [
   {
    "slot": "Areia",
    "value": "Proficiência Elemental"
   },
   {
    "slot": "Cálice",
    "value": "Proficiência Elemental (ou Recarga de Energia)"
   },
   {
    "slot": "Tiara",
    "value": "Proficiência Elemental"
   }
  ],
  "substats": "Prioridade: Recarga de Energia (cerca de 160%-180% na maioria das equipes) > Proficiência Elemental > Taxa CRIT (só com Favonius Lance).",
  "teams": [
   {
    "name": "Zibai com Gorou",
    "members": [
     {
      "name": "Illuga"
     },
     {
      "name": "Zibai"
     },
     {
      "name": "Columbina"
     },
     {
      "name": "Gorou"
     }
    ],
    "note": "Zibai causa dano Lunar-Crystallize direto, amplificado pelo Burst do Illuga."
   },
   {
    "name": "Zibai com Zhongli",
    "members": [
     {
      "name": "Illuga"
     },
     {
      "name": "Zibai"
     },
     {
      "name": "Columbina"
     },
     {
      "name": "Zhongli"
     }
    ],
    "note": "Columbina habilita a reação e Zhongli adiciona escudo."
   },
   {
    "name": "Geo com Itto",
    "members": [
     {
      "name": "Illuga"
     },
     {
      "name": "Arataki Itto"
     },
     {
      "name": "Columbina"
     },
     {
      "name": "Gorou"
     }
    ],
    "note": "O Burst do Illuga dá buffs de dano Geo, menores que os de Lunar-Crystallize."
   }
  ]
 },
 "jahoda": {
  "patch": "Atualizado em 2 Dez 2025 (sem versão de patch indicada)",
  "sources": [
   {
    "label": "Icy Veins: builds",
    "url": "https://www.icy-veins.com/genshin-impact/jahoda-guide-best-builds"
   },
   {
    "label": "Icy Veins: equipes",
    "url": "https://www.icy-veins.com/genshin-impact/jahoda-team-guide"
   }
  ],
  "weapons": [
   {
    "name": "Elegy for the End",
    "note": "Premium: muita Recarga de Energia, ATQ base alto e PE e ATQ para a equipe."
   },
   {
    "name": "Rainbow Serpent's Rain Bow",
    "note": "Arma de evento com Recarga de Energia e grande buff de ATQ para o dano pessoal."
   },
   {
    "name": "Favonius Warbow",
    "note": "Boa opção de suporte, mas o ATQ baixo reduz seu dano e cura."
   }
  ],
  "artifacts": [
   {
    "name": "Viridescent Venerer",
    "note": "Geralmente o melhor: aumenta o dano de Swirl e reduz a RES elemental inimiga."
   },
   {
    "name": "Silken Moon's Serenade",
    "note": "Alternativa forte em equipes Moonsign."
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
    "value": "Bônus de Cura ou Taxa CRIT"
   }
  ],
  "substats": "Prioridade: Recarga de Energia > Taxa CRIT (com Favonius Warbow) > ATQ%.",
  "teams": [
   {
    "name": "Moonsign com Flins",
    "members": [
     {
      "name": "Jahoda"
     },
     {
      "name": "Flins"
     },
     {
      "name": "Ineffa"
     },
     {
      "name": "Yelan"
     }
    ],
    "note": "Yelan é sugerida como Hydro no lugar da Aino, liberando-a para outra equipe Moonsign."
   },
   {
    "name": "Hyperbloom com Nefer",
    "members": [
     {
      "name": "Jahoda"
     },
     {
      "name": "Nefer"
     },
     {
      "name": "Lauma"
     },
     {
      "name": "Furina"
     }
    ],
    "note": "Competitiva com a Nefer em C6 e ainda viável em constelações menores."
   },
   {
    "name": "Hu Tao com Furina",
    "members": [
     {
      "name": "Jahoda"
     },
     {
      "name": "Hu Tao"
     },
     {
      "name": "Furina"
     },
     {
      "name": "Ineffa"
     }
    ],
    "note": "A cura da Jahoda acumula Fanfare da Furina, e o Hydro da Furina permite a Jahoda usar o frasco Hydro."
   }
  ]
 },
 "alyosha": {
  "patch": "Atualizado em 13 Ago 2026 (versão 7.0)",
  "sources": [
   {
    "label": "Icy Veins: builds",
    "url": "https://www.icy-veins.com/genshin-impact/alyosha-guide-best-builds"
   },
   {
    "label": "Icy Veins: equipes",
    "url": "https://www.icy-veins.com/genshin-impact/alyosha-team-guide"
   }
  ],
  "weapons": [
   {
    "name": "Engulfing Lightning",
    "note": "Melhor arma: muita Recarga de Energia convertida em ATQ."
   },
   {
    "name": "Symphonist of Scents",
    "note": "Opção de dano com Dano CRIT; a passiva combina com cura e buffs de ATQ fora de campo."
   },
   {
    "name": "Favonius Lance",
    "note": "Provavelmente a próxima melhor: Recarga de Energia e Energia para a equipe."
   },
   {
    "name": "Song of the Vigil",
    "note": "Opção equilibrada para equipes de reação, com Proficiência Elemental, Energia e ATQ."
   },
   {
    "name": "Tamayuratei no Ohanashi",
    "note": "Dá Recarga de Energia e ATQ, ideal para sub-DPS."
   },
   {
    "name": "The Catch",
    "note": "Forte para dano fora de campo: aumenta o dano de Burst e a Taxa CRIT."
   },
   {
    "name": "Frostbreath",
    "note": "Semelhante à Favonius Lance, mas exige reação Cryo ou Hydro a cada 16s."
   }
  ],
  "artifacts": [
   {
    "name": "Noblesse Oblige",
    "note": "Conjunto principal: o buff de ATQ de 4 peças combina com o Burst a cada rotação."
   },
   {
    "name": "Heart of the Furnace",
    "note": "Opção secundária, se nenhum outro usuário (como Odette) estiver na equipe."
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
    "value": "ATQ% ou Taxa CRIT"
   }
  ],
  "substats": "Prioridade: Recarga de Energia (até o necessário pela equipe) > ATQ% > Taxa CRIT (só com Favonius Lance).",
  "teams": [
   {
    "name": "Stellar Conduct com Sandrone",
    "members": [
     {
      "name": "Alyosha"
     },
     {
      "name": "Sandrone"
     },
     {
      "name": "Odette"
     },
     {
      "name": "Yae Miko"
     }
    ],
    "note": "Equipe premium de Stellar Conduct."
   },
   {
    "name": "Stellar Conduct com Wriothesley",
    "members": [
     {
      "name": "Alyosha"
     },
     {
      "name": "Wriothesley"
     },
     {
      "name": "Odette"
     },
     {
      "name": "Yae Miko"
     }
    ],
    "note": "Variante trocando Sandrone por Wriothesley."
   },
   {
    "name": "Suporte Electro fora de campo",
    "members": [
     {
      "name": "Alyosha"
     },
     {
      "name": "Varesa"
     },
     {
      "name": "Chevreuse"
     },
     {
      "name": "Fischl"
     }
    ],
    "note": "Alyosha dá aplicação de Electro e buff de ATQ; menos especializada."
   }
  ]
 },
 "ifa": {
  "patch": "Atualizado em 20/10/2025",
  "sources": [
   {
    "label": "Icy Veins: builds",
    "url": "https://www.icy-veins.com/genshin-impact/ifa-guide-best-builds"
   }
  ],
  "weapons": [
   {
    "name": "Sunny Morning Sleep-In",
    "note": "Melhor arma para a Ifa."
   },
   {
    "name": "Mappa Mare",
    "note": "Opção gratuita (craftável)."
   },
   {
    "name": "Hakushin Ring",
    "note": "Opção focada em Electro (craftável)."
   },
   {
    "name": "Prototype Amber",
    "note": "Alternativa de cura se a cura da Ifa parecer fraca."
   },
   {
    "name": "A Thousand Floating Dreams",
    "note": "Alternativa."
   },
   {
    "name": "Favonius Codex",
    "note": "Alternativa; usa-se CRIT Rate apenas com esta arma."
   },
   {
    "name": "Sacrificial Fragments",
    "note": "Alternativa."
   }
  ],
  "artifacts": [
   {
    "name": "Viridescent Venerer",
    "note": "Conjunto recomendado para a Ifa."
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
    "value": "Proficiência Elemental"
   }
  ],
  "substats": "Prioridade: Recarga de Energia (até atingir o necessário) > Proficiência Elemental > Taxa CRIT (só com Favonius Codex)",
  "teams": [
   {
    "name": "Taser",
    "members": [
     {
      "name": "Ifa"
     },
     {
      "name": "Ineffa"
     },
     {
      "name": "Furina"
     },
     {
      "name": "Ororon"
     }
    ],
    "note": "Equipe Taser."
   },
   {
    "name": "Taser",
    "members": [
     {
      "name": "Ifa"
     },
     {
      "name": "Fischl"
     },
     {
      "name": "Furina"
     },
     {
      "name": "Ororon"
     }
    ],
    "note": "Equipe Taser."
   },
   {
    "name": "Hyperbloom",
    "members": [
     {
      "name": "Ifa"
     },
     {
      "name": "Ororon"
     },
     {
      "name": "Nahida"
     },
     {
      "name": "Furina"
     }
    ],
    "note": "Equipe Hyperbloom."
   }
  ]
 },
 "linnea": {
  "patch": "7.1 (atualizado em 18/09/2026)",
  "sources": [
   {
    "label": "Icy Veins: builds",
    "url": "https://www.icy-veins.com/genshin-impact/linnea-guide-best-builds"
   },
   {
    "label": "Icy Veins: equipes",
    "url": "https://www.icy-veins.com/genshin-impact/linnea-team-guide"
   }
  ],
  "weapons": [
   {
    "name": "Golden Frostbound Oath",
    "note": "Melhor opção, em R1."
   },
   {
    "name": "Covenant of Frost and Snow",
    "note": "Segunda opção, em R5."
   },
   {
    "name": "Aqua Simulacra",
    "note": "Opção em R1."
   },
   {
    "name": "Skyward Harp",
    "note": "Opção em R1."
   },
   {
    "name": "Slingshot",
    "note": "Opção em R5."
   },
   {
    "name": "Snare Hook",
    "note": "Opção em R5."
   }
  ],
  "artifacts": [
   {
    "name": "Aubade of Morningstar and Moon",
    "note": "Melhor conjunto em geral."
   },
   {
    "name": "Husk of Opulent Dreams",
    "note": "Alternativa."
   },
   {
    "name": "Silken Moon's Serenade",
    "note": "Melhor quando usado por outro suporte."
   }
  ],
  "mainStats": [
   {
    "slot": "Areia",
    "value": "DEF% ou Proficiência Elemental"
   },
   {
    "slot": "Cálice",
    "value": "DEF% ou Proficiência Elemental"
   },
   {
    "slot": "Tiara",
    "value": "Taxa CRIT ou Dano CRIT (DEF% como alternativa)"
   }
  ],
  "substats": "Prioridade: CRIT > DEF% > Proficiência Elemental",
  "teams": [
   {
    "name": "Lunar-Crystallize",
    "members": [
     {
      "name": "Linnea"
     },
     {
      "name": "Columbina"
     },
     {
      "name": "Illuga"
     },
     {
      "name": "Zibai"
     }
    ],
    "note": "Zibai é o melhor DPS Geo para a Linnea e aumenta o dano Lunar-Crystallize."
   },
   {
    "name": "Lunar-Crystallize",
    "members": [
     {
      "name": "Linnea"
     },
     {
      "name": "Columbina"
     },
     {
      "name": "Illuga"
     },
     {
      "name": "Arataki Itto"
     }
    ],
    "note": "Itto é um DPS Geo que se beneficia dos buffs da Linnea."
   },
   {
    "name": "Lunar-Crystallize",
    "members": [
     {
      "name": "Linnea"
     },
     {
      "name": "Columbina"
     },
     {
      "name": "Illuga"
     },
     {
      "name": "Navia"
     }
    ],
    "note": "Navia é outra opção de DPS Geo neste núcleo."
   }
  ]
 },
 "lohen": {
  "patch": "7.1 (atualizado em 22/09/2026)",
  "sources": [
   {
    "label": "Icy Veins: builds",
    "url": "https://www.icy-veins.com/genshin-impact/lohen-guide-best-builds"
   },
   {
    "label": "Icy Veins: equipes",
    "url": "https://www.icy-veins.com/genshin-impact/lohen-team-guide"
   }
  ],
  "weapons": [
   {
    "name": "Disaster and Remorse",
    "note": "Arma exclusiva e melhor opção."
   },
   {
    "name": "Primordial Jade Winged-Spear",
    "note": "Segunda melhor opção em dano."
   },
   {
    "name": "Staff of the Scarlet Sands",
    "note": "Indicada para equipes Melt ou Burn Melt."
   },
   {
    "name": "Fractured Halo",
    "note": "Opção de dano."
   },
   {
    "name": "White Tassel",
    "note": "Base para jogadores gratuitos, em R5."
   },
   {
    "name": "Deathmatch",
    "note": "Melhor opção de 4 estrelas, em R5."
   }
  ],
  "artifacts": [
   {
    "name": "A Day Carved From Rising Winds",
    "note": "Melhor para equipes Melt e Burn Melt."
   },
   {
    "name": "Blizzard Strayer",
    "note": "Opção para equipes Freeze."
   },
   {
    "name": "Marechaussee Hunter",
    "note": "Alternativa para Freeze com Furina."
   }
  ],
  "mainStats": [
   {
    "slot": "Areia",
    "value": "ATK%"
   },
   {
    "slot": "Cálice",
    "value": "Dano Cryo"
   },
   {
    "slot": "Tiara",
    "value": "Taxa CRIT ou Dano CRIT"
   }
  ],
  "substats": "Prioridade: Taxa CRIT / Dano CRIT > ATK% > Proficiência Elemental > Recarga de Energia",
  "teams": [
   {
    "name": "Melt",
    "members": [
     {
      "name": "Lohen"
     },
     {
      "name": "Durin"
     },
     {
      "name": "Nicole"
     },
     {
      "name": "Xilonen"
     }
    ],
    "note": "Durin dá Pyro fora de campo e é o segundo personagem Hexerei."
   },
   {
    "name": "Melt",
    "members": [
     {
      "name": "Lohen"
     },
     {
      "name": "Durin"
     },
     {
      "name": "Nicole"
     },
     {
      "name": "Citlali"
     }
    ],
    "note": "Citlali é especialista em Melt, com escudo e redução de RES Pyro."
   },
   {
    "name": "Freeze",
    "members": [
     {
      "name": "Lohen"
     },
     {
      "name": "Mona"
     },
     {
      "name": "Furina"
     },
     {
      "name": "Escoffier"
     }
    ],
    "note": "Mona é o Hydro para os requisitos do Witch's Eve Rite."
   }
  ]
 },
 "odette": {
  "patch": "7.0 V3 (atualizado em 13/08/2026)",
  "sources": [
   {
    "label": "Icy Veins: builds",
    "url": "https://www.icy-veins.com/genshin-impact/odette-guide-best-builds"
   },
   {
    "label": "Icy Veins: equipes",
    "url": "https://www.icy-veins.com/genshin-impact/odette-team-guide"
   }
  ],
  "weapons": [
   {
    "name": "Whitelake Frostfeather",
    "note": "Primeira opção da lista."
   },
   {
    "name": "Freedom-Sworn",
    "note": "Segunda opção."
   },
   {
    "name": "Primordial Jade Cutter",
    "note": "Terceira opção."
   },
   {
    "name": "Azurelight",
    "note": "Opção da lista."
   },
   {
    "name": "Absolution",
    "note": "Opção da lista."
   },
   {
    "name": "Mistsplitter Reforged",
    "note": "Opção da lista."
   },
   {
    "name": "Emberwell",
    "note": "Melhor opção gratuita de 4 estrelas (craftável)."
   }
  ],
  "artifacts": [
   {
    "name": "Disenchantment in Deep Shadow",
    "note": "Melhor para o dano pessoal em equipes Stellar-Conduct."
   },
   {
    "name": "Heart of the Furnace",
    "note": "Use se ninguém mais na equipe usar."
   },
   {
    "name": "Tenacity of the Millelith",
    "note": "Opção de suporte em equipes com ATK, se ninguém mais usar."
   }
  ],
  "mainStats": [
   {
    "slot": "Areia",
    "value": "ATK% ou Proficiência Elemental"
   },
   {
    "slot": "Cálice",
    "value": "ATK% ou Proficiência Elemental"
   },
   {
    "slot": "Tiara",
    "value": "Taxa CRIT ou Dano CRIT"
   }
  ],
  "substats": "Prioridade: Taxa CRIT / Dano CRIT > ATK% > Proficiência Elemental > Recarga de Energia",
  "teams": [
   {
    "name": "Stellar-Conduct",
    "members": [
     {
      "name": "Odette"
     },
     {
      "name": "Sandrone"
     },
     {
      "name": "Yae Miko"
     },
     {
      "name": "Alyosha"
     }
    ],
    "note": "Yae Miko dá dano fora de campo e buffs; Alyosha traz Electro, cura e buffs."
   },
   {
    "name": "Stellar-Conduct",
    "members": [
     {
      "name": "Odette"
     },
     {
      "name": "Wriothesley"
     },
     {
      "name": "Nicole"
     },
     {
      "name": "Yae Miko"
     }
    ],
    "note": "Nicole aumenta o ATK da equipe e pode proteger o DPS."
   },
   {
    "name": "Stellar-Swirl",
    "members": [
     {
      "name": "Odette"
     },
     {
      "name": "Yumemizuki Mizuki"
     },
     {
      "name": "Traveler"
     },
     {
      "name": "Faruzan"
     }
    ],
    "note": "Mizuki é DPS Stellar-Swirl e precisa da Odette para a reação."
   }
  ]
 },
 "prune": {
  "patch": "Atualizado em 19/05/2026 (patch não informado)",
  "sources": [
   {
    "label": "Icy Veins: builds",
    "url": "https://www.icy-veins.com/genshin-impact/prune-guide-best-builds"
   },
   {
    "label": "Icy Veins: equipes",
    "url": "https://www.icy-veins.com/genshin-impact/prune-team-guide"
   }
  ],
  "weapons": [
   {
    "name": "Angelos' Heptades",
    "note": "Melhor opção se a Nicole não estiver na equipe."
   },
   {
    "name": "Skyward Atlas",
    "note": "Opção da lista."
   },
   {
    "name": "Memory of Dust",
    "note": "Opção da lista."
   },
   {
    "name": "Oathsworn Eye",
    "note": "Opção da lista."
   },
   {
    "name": "Dodoco Tales",
    "note": "Opção da lista."
   },
   {
    "name": "Favonius Codex",
    "note": "Opção da lista."
   }
  ],
  "artifacts": [
   {
    "name": "Viridescent Venerer",
    "note": "Melhor conjunto."
   },
   {
    "name": "Celestial Gift",
    "note": "Boa alternativa se outro personagem não a usar."
   },
   {
    "name": "Gladiator's Finale",
    "note": "Viável, principalmente em combinações 2+2 com bônus de ATK."
   }
  ],
  "mainStats": [],
  "substats": "Prioridade: ATK e Recarga de Energia; CRIT tem prioridade menor",
  "teams": [
   {
    "name": "Varka",
    "members": [
     {
      "name": "Varka"
     },
     {
      "name": "Prune"
     },
     {
      "name": "Durin"
     },
     {
      "name": "Nicole"
     }
    ],
    "note": "Prune é uma das melhores opções Anemo para o Varka."
   },
   {
    "name": "Venti",
    "members": [
     {
      "name": "Venti"
     },
     {
      "name": "Prune"
     },
     {
      "name": "Durin"
     },
     {
      "name": "Nicole"
     }
    ],
    "note": "Venti se beneficia dos buffs da Prune."
   },
   {
    "name": "Lohen",
    "members": [
     {
      "name": "Lohen"
     },
     {
      "name": "Prune"
     },
     {
      "name": "Durin"
     },
     {
      "name": "Nicole"
     }
    ],
    "note": "Lohen tem boa sinergia com a Prune em equipes Hexerei."
   }
  ]
 },
 "sandrone": {
  "patch": "7.1 (atualizado em 18/09/2026)",
  "sources": [
   {
    "label": "Icy Veins: builds",
    "url": "https://www.icy-veins.com/genshin-impact/sandrone-guide-best-builds"
   },
   {
    "label": "Icy Veins: equipes",
    "url": "https://www.icy-veins.com/genshin-impact/sandrone-team-guide"
   }
  ],
  "weapons": [
   {
    "name": "A Teaspoon of Transcendence",
    "note": "Arma exclusiva e a mais forte para ela."
   },
   {
    "name": "A Thousand Blazing Suns",
    "note": "Segunda mais forte, com passiva de uptime total."
   },
   {
    "name": "Redhorn Stonethresher",
    "note": "Stat stick de Dano CRIT."
   },
   {
    "name": "Blade of Atonement",
    "note": "Melhor opção gratuita, mas exige reações de aplicadores Electro fora de campo."
   },
   {
    "name": "The Unforged",
    "note": "Opção da lista."
   },
   {
    "name": "Forged by the Golden Melody",
    "note": "Opção em R5."
   },
   {
    "name": "Mailed Flower",
    "note": "Boa opção gratuita, mas não é mais obtível."
   }
  ],
  "artifacts": [
   {
    "name": "Disenchantment in Deep Shadow",
    "note": "De longe o melhor conjunto dela."
   },
   {
    "name": "A Day Carved From Rising Winds",
    "note": "Alternativa até obter o melhor conjunto."
   },
   {
    "name": "Gladiator's Finale",
    "note": "Alternativa até obter o melhor conjunto."
   }
  ],
  "mainStats": [
   {
    "slot": "Areia",
    "value": "ATK% ou Proficiência Elemental"
   },
   {
    "slot": "Cálice",
    "value": "ATK% ou Proficiência Elemental (não ambos EM)"
   },
   {
    "slot": "Tiara",
    "value": "Taxa CRIT ou Dano CRIT"
   }
  ],
  "substats": "Prioridade: Recarga de Energia > Taxa CRIT > Dano CRIT > ATK% = Proficiência Elemental",
  "teams": [
   {
    "name": "Stellar-Conduct",
    "members": [
     {
      "name": "Sandrone"
     },
     {
      "name": "Alyosha"
     },
     {
      "name": "Yae Miko"
     },
     {
      "name": "Odette"
     }
    ],
    "note": "Alyosha cura, Yae Miko aplica Electro e Odette dá buffs."
   },
   {
    "name": "Stellar-Conduct",
    "members": [
     {
      "name": "Sandrone"
     },
     {
      "name": "Qiqi"
     },
     {
      "name": "Yae Miko"
     },
     {
      "name": "Odette"
     }
    ],
    "note": "Qiqi substitui Alyosha na cura e aplica Cryo fora de campo."
   },
   {
    "name": "Stellar-Conduct",
    "members": [
     {
      "name": "Sandrone"
     },
     {
      "name": "Escoffier"
     },
     {
      "name": "Yae Miko"
     },
     {
      "name": "Odette"
     }
    ],
    "note": "Escoffier traz redução de RES e dano Cryo fora de campo."
   }
  ]
 },
 "varka": {
  "patch": "7.0 (atualizado em 10/08/2026)",
  "sources": [
   {
    "label": "Icy Veins: builds",
    "url": "https://www.icy-veins.com/genshin-impact/varka-guide-best-builds"
   },
   {
    "label": "Icy Veins: equipes",
    "url": "https://www.icy-veins.com/genshin-impact/varka-team-guide"
   },
   {
    "label": "Genshin-Builds: builds",
    "url": "https://genshin-builds.com/en/character/varka"
   }
  ],
  "weapons": [
   {
    "name": "Gest of the Mighty Wolf",
    "note": "Arma exclusiva e melhor opção por larga margem; dá Taxa Crít., velocidade de ataque e dano."
   },
   {
    "name": "A Thousand Blazing Suns",
    "note": "Opção forte que dá Dano Crít. e ATQ ao usar Habilidade ou Supremo."
   },
   {
    "name": "Beacon of the Reed Sea",
    "note": "Dá Taxa Crít. e ATQ após a habilidade acertar ou ao receber dano."
   },
   {
    "name": "Redhorn Stonethresher",
    "note": "Alternativa 5 estrelas citada no guia."
   },
   {
    "name": "Wolf's Gravestone",
    "note": "Alternativa 5 estrelas citada no guia."
   },
   {
    "name": "Serpent Spine",
    "note": "Melhor 4 estrelas, mas exclusiva do passe de batalha."
   },
   {
    "name": "Prototype Archaic",
    "note": "Opção gratuita recomendada, fabricável."
   }
  ],
  "artifacts": [
   {
    "name": "A Day Carved From Rising Winds",
    "note": "Melhor conjunto; dá ATQ e bônus de 20% de Taxa Crít. se a Witch's Homework for concluída."
   },
   {
    "name": "Desert Pavilion Chronicle",
    "note": "Alternativa; exige começar a rotação com Ataque Carregado."
   },
   {
    "name": "Shimenawa's Reminiscence",
    "note": "Alternativa para quem já tem boas peças; é preciso manter o buff de 10 segundos."
   }
  ],
  "mainStats": [
   {
    "slot": "Areia",
    "value": "ATQ%"
   },
   {
    "slot": "Cálice",
    "value": "Dano Pyro% (C0 em time Pyro); caso contrário ATQ%"
   },
   {
    "slot": "Tiara",
    "value": "Dano Crít. (pelo menos igual à Taxa Crít.)"
   }
  ],
  "substats": "Prioridade: Taxa Crít. e Dano Crít. > ATQ% > Proficiência Elemental > Recarga de Energia",
  "teams": [
   {
    "name": "Anemo-Pyro",
    "members": [
     {
      "name": "Varka"
     },
     {
      "name": "Venti"
     },
     {
      "name": "Bennett"
     },
     {
      "name": "Durin"
     }
    ],
    "note": "Considerada a melhor equipe possível para Varka."
   },
   {
    "name": "Anemo-Pyro",
    "members": [
     {
      "name": "Varka"
     },
     {
      "name": "Venti"
     },
     {
      "name": "Nicole"
     },
     {
      "name": "Durin"
     }
    ],
    "note": "Nicole e Durin juntos permitem o maior dano de Varka."
   },
   {
    "name": "Anemo-Pyro",
    "members": [
     {
      "name": "Varka"
     },
     {
      "name": "Prune"
     },
     {
      "name": "Nicole"
     },
     {
      "name": "Durin"
     }
    ],
    "note": "Variação Pyro sem Venti."
   }
  ]
 },
 "vodyanitsa": {
  "patch": "7.1 (atualizado em 22/09/2026)",
  "sources": [
   {
    "label": "Icy Veins: builds",
    "url": "https://www.icy-veins.com/genshin-impact/vodyanitsa-guide-best-builds"
   },
   {
    "label": "Icy Veins: equipes",
    "url": "https://www.icy-veins.com/genshin-impact/vodyanitsa-team-guide"
   },
   {
    "label": "Genshin-Builds: builds",
    "url": "https://genshin-builds.com/en/character/vodyanitsa"
   }
  ],
  "weapons": [
   {
    "name": "Hymn of the Maelstrom",
    "note": "Arma exclusiva e primeira opção; dá VIDA%, Bônus de Cura e buff de ATQ ao time conforme a Vida Máx."
   },
   {
    "name": "Thrilling Tales of Dragon Slayers",
    "note": "Bom suporte; dá VIDA% e grande buff de ATQ ao próximo personagem."
   },
   {
    "name": "Jadefall's Splendor",
    "note": "Opção decente que escala com Vida e dá Bônus de Dano Elemental e energia."
   },
   {
    "name": "Everlasting Moonglow",
    "note": "Arma sólida que escala com Vida e aumenta o Bônus de Cura."
   },
   {
    "name": "Prototype Amber",
    "note": "Uma das poucas opções viáveis de 4 estrelas; dá Vida e Energia após o Supremo."
   },
   {
    "name": "Ash-Graven Drinking Horn",
    "note": "Opção gratuita que dá Vida e dano em área periódico."
   }
  ],
  "artifacts": [
   {
    "name": "Tenacity of the Millelith",
    "note": "Melhor conjunto; dá VIDA +20% e buffs de ATQ e Força de Escudo ao time."
   },
   {
    "name": "Song of Days Past",
    "note": "Dá Bônus de Cura e converte a cura em bônus de dano para o time."
   },
   {
    "name": "Instructor",
    "note": "Opção para iniciantes; dá Proficiência Elemental, mas tem menos Vida."
   }
  ],
  "mainStats": [
   {
    "slot": "Areia",
    "value": "VIDA%"
   },
   {
    "slot": "Cálice",
    "value": "VIDA%"
   },
   {
    "slot": "Tiara",
    "value": "VIDA%"
   }
  ],
  "substats": "Prioridade: VIDA% > VIDA > Recarga de Energia (opcional); meta de cerca de 60.000 a 65.000+ de Vida",
  "teams": [
   {
    "name": "Stellar Swirl",
    "members": [
     {
      "name": "Vodyanitsa"
     },
     {
      "name": "Vesna"
     },
     {
      "name": "Faruzan"
     },
     {
      "name": "Odette"
     }
    ],
    "note": "Odette é a melhor suporte para as equipes de Vesna."
   },
   {
    "name": "Freeze",
    "members": [
     {
      "name": "Vodyanitsa"
     },
     {
      "name": "Skirk"
     },
     {
      "name": "Escoffier"
     },
     {
      "name": "Furina"
     }
    ],
    "note": "Equipes Freeze com DPS Cryo ou Hydro estão entre as mais fortes."
   },
   {
    "name": "Hydro",
    "members": [
     {
      "name": "Vodyanitsa"
     },
     {
      "name": "Varka"
     },
     {
      "name": "Prune"
     },
     {
      "name": "Furina"
     }
    ],
    "note": "Vodyanitsa atua como buffer e curandeira."
   }
  ]
 },
 "zibai": {
  "patch": "6.4 (atualizado em 13/03/2026)",
  "sources": [
   {
    "label": "Icy Veins: builds",
    "url": "https://www.icy-veins.com/genshin-impact/zibai-guide-best-builds"
   },
   {
    "label": "Icy Veins: equipes",
    "url": "https://www.icy-veins.com/genshin-impact/zibai-team-guide"
   },
   {
    "label": "Genshin-Builds: builds",
    "url": "https://genshin-builds.com/en/character/zibai"
   }
  ],
  "weapons": [
   {
    "name": "Lightbearing Moonshard",
    "note": "Arma exclusiva e melhor opção; dá bônus de DEF e de dano Lunar-Cristalizar."
   },
   {
    "name": "Uraku Misugiri",
    "note": "Forte opção 5 estrelas com Dano Crít., Dano de Habilidade e DEF."
   },
   {
    "name": "Light of Foliar Incision",
    "note": "Forte, com passiva que escala com Proficiência Elemental."
   },
   {
    "name": "Peak Patrol Song",
    "note": "Fornece grande quantidade de DEF."
   },
   {
    "name": "Splendor of Tranquil Waters",
    "note": "Arma de status com Dano Crít. alto."
   },
   {
    "name": "Harbinger of Dawn",
    "note": "Dá muita Taxa Crít., mas a passiva exige Vida acima de 90%."
   },
   {
    "name": "Flute of Ezpitzal",
    "note": "Melhor opção gratuita, com 69% de DEF e mais DEF pelo efeito."
   }
  ],
  "artifacts": [
   {
    "name": "Night of the Sky's Unveiling",
    "note": "Conjunto recomendado; 2 peças dão +80 de Proficiência Elemental e 4 peças aumentam Taxa Crít. e dano de reações Lunares."
   }
  ],
  "mainStats": [
   {
    "slot": "Areia",
    "value": "DEF% ou Proficiência Elemental"
   },
   {
    "slot": "Cálice",
    "value": "DEF% ou Proficiência Elemental (evitar Dano Geo)"
   },
   {
    "slot": "Tiara",
    "value": "Taxa Crít. ou Dano Crít."
   }
  ],
  "substats": "Prioridade: Taxa Crít./Dano Crít. > DEF% = Proficiência Elemental > Recarga de Energia",
  "teams": [
   {
    "name": "Equipe Columbina",
    "members": [
     {
      "name": "Zibai"
     },
     {
      "name": "Columbina"
     },
     {
      "name": "Linnea"
     },
     {
      "name": "Illuga"
     }
    ],
    "note": "DPS Lunar com suportes Hydro/Geo; Columbina é a melhor suporte Hydro esperada."
   },
   {
    "name": "Equipe Columbina",
    "members": [
     {
      "name": "Zibai"
     },
     {
      "name": "Columbina"
     },
     {
      "name": "Linnea"
     },
     {
      "name": "Gorou"
     }
    ],
    "note": "Gorou fornece buff de DEF."
   },
   {
    "name": "Equipe Columbina",
    "members": [
     {
      "name": "Zibai"
     },
     {
      "name": "Columbina"
     },
     {
      "name": "Linnea"
     },
     {
      "name": "Zhongli"
     }
    ],
    "note": "Zhongli fornece escudo e suporte Geo."
   }
  ]
 },
 "manekin": {
  "patch": "atualizado em 18/10/2025",
  "sources": [
   {
    "label": "Icy Veins: builds",
    "url": "https://www.icy-veins.com/genshin-impact/manekin-guide-and-overview"
   },
   {
    "label": "Genshin-Builds: builds",
    "url": "https://genshin-builds.com/en/character/manekin"
   }
  ],
  "weapons": [
   {
    "name": "The Black Sword",
    "note": "Arma de status 5 estrelas de Taxa Crít. ou ATQ."
   },
   {
    "name": "Blackcliff Longsword",
    "note": "Arma de status de Dano Crít./ATQ citada no guia."
   },
   {
    "name": "Wolf-Fang",
    "note": "Arma de status de Taxa Crít./ATQ citada no guia."
   }
  ],
  "artifacts": [
   {
    "name": "Gladiator's Finale",
    "note": "Conjunto generalista; o guia recomenda build universal, pois o elemento segue o Viajante."
   }
  ],
  "mainStats": [
   {
    "slot": "Areia",
    "value": "ATQ%"
   },
   {
    "slot": "Cálice",
    "value": "ATQ%"
   },
   {
    "slot": "Tiara",
    "value": "Taxa Crít. ou Dano Crít."
   }
  ],
  "substats": "Prioridade: Recarga de Energia até o necessário > Taxa Crít./Dano Crít. > ATQ%",
  "teams": []
 },
 "manekina": {
  "patch": "atualizado em 18/10/2025",
  "sources": [
   {
    "label": "Icy Veins: builds",
    "url": "https://www.icy-veins.com/genshin-impact/manekin-guide-and-overview"
   },
   {
    "label": "Genshin-Builds: builds",
    "url": "https://genshin-builds.com/en/character/manekina"
   }
  ],
  "weapons": [
   {
    "name": "The Black Sword",
    "note": "Arma de status 5 estrelas de Taxa Crít. ou ATQ."
   },
   {
    "name": "Blackcliff Longsword",
    "note": "Arma de status de Dano Crít./ATQ citada no guia."
   },
   {
    "name": "Wolf-Fang",
    "note": "Arma de status de Taxa Crít./ATQ citada no guia."
   }
  ],
  "artifacts": [
   {
    "name": "Gladiator's Finale",
    "note": "Conjunto generalista; o guia recomenda build universal, pois o elemento segue o Viajante."
   }
  ],
  "mainStats": [
   {
    "slot": "Areia",
    "value": "ATQ%"
   },
   {
    "slot": "Cálice",
    "value": "ATQ%"
   },
   {
    "slot": "Tiara",
    "value": "Taxa Crít. ou Dano Crít."
   }
  ],
  "substats": "Prioridade: Recarga de Energia até o necessário > Taxa Crít./Dano Crít. > ATQ%",
  "teams": []
 }
}
