// Atelier — répertoire de connaissances.
// Chaque fiche est un objet dans ce tableau. Colle les nouvelles fiches générées
// par l'onglet "Ajouter une fiche" ici (n'importe où dans le tableau, l'ordre
// n'a pas d'importance — l'affichage se trie automatiquement par date).
//
// Format d'une fiche :
// {
//   "titre": "...",
//   "domaines": ["Fiscalité", "Travaux"],
//   "resume": "...",
//   "contexte": "...",      // optionnel
//   "source": "...",        // optionnel
//   "date_ajout": "2026-09"
// }

const LEXIQUE = [
  {
  "titre": "Plafond en polystyrène : mal vu par les assurances",
  "domaines": [
    "Travaux"
  ],
  "resume": "Le polystyrène en plafond n'est pas interdit dans l'habitat individuel, mais mal vu par les assureurs : matériau très inflammable, il peut aggraver un incendie (fumées toxiques, coulées en fusion) et n'est souvent plus conforme aux normes actuelles quand il est ancien. En cas de sinistre, l'assureur peut invoquer cette non-conformité pour réduire ou refuser l'indemnisation.",
  "contexte": "Dans les ERP (locaux professionnels ou recevant du public), ce type de plafond est en revanche strictement interdit. Sur un bien à rénover, il est recommandé de vérifier le classement au feu du matériau existant, ou d'envisager sa dépose au profit d'un matériau incombustible (placo) pour écarter tout litige avec l'assurance habitation.",
  "source": "Synthèse de plusieurs sources web (maisona360.fr, couleur-maison-construction.fr, cible-energie.fr, legifrance.gouv.fr)",
  "date_ajout": "2026-09"
},
  {
  "titre": "VMC : pas obligatoire, mais quasi incontournable en pratique",
  "domaines": [
    "Juridique",
    "Travaux"
  ],
  "resume": "La loi impose une ventilation générale et permanente dans tout logement, mais n'oblige pas spécifiquement une VMC mécanique. Dans l'ancien (avant 1982), un système d'aération fonctionnel (grilles, fenêtres) suffit légalement ; dans le neuf, la VMC est de fait incontournable pour respecter les normes d'étanchéité à l'air actuelles (RE2020).",
  "contexte": "En location, le propriétaire doit fournir un logement décent avec un air sain — si le bâti est étanche ou rénové, la VMC devient en pratique indispensable pour éviter humidité et moisissures, même sans obligation légale explicite de VMC en tant que telle.",
  "source": "Synthèse de plusieurs sources web (izi-by-edf-renov.fr, kazamea-energie.com, travaux.com, foncia.com)",
  "date_ajout": "2026-09"
},
  {
  "titre": "Fenêtre en RDC donnant sur le voisin : distances légales à respecter",
  "domaines": [
    "Juridique",
    "Travaux"
  ],
  "resume": "Créer une fenêtre au RDC qui donne sur la propriété voisine est encadré par le Code civil (art. 675-680) : en vue droite (regard direct sans se pencher), il faut 1,90 m entre le mur et la limite séparative ; en vue oblique (il faut tourner la tête), 0,60 m suffisent. En limite exacte (0 m), seule une ouverture fixe en verre opaque, dite « jour de souffrance », est autorisée (hauteur minimale 2,60 m du plancher, châssis non ouvrant).",
  "contexte": "Une fenêtre classique ne respectant pas ces distances peut rester légale dans trois cas : accord amiable écrit (servitude de vue), possession depuis plus de 30 ans sans contestation (prescription trentenaire), ou terrains issus d'une même propriété divisée plus tard (destination du père de famille). En cas de non-conformité chez un voisin : vérifier en mairie si une déclaration préalable a été déposée, puis lettre recommandée, conciliateur de justice (étape obligatoire avant tribunal), et enfin recours judiciaire en dernier ressort.",
  "source": "Synthèse de plusieurs sources (legifrance.gouv.fr — Code civil art. 675-680, pap.fr, service-public.gouv.fr, astenavocats.com)",
  "date_ajout": "2026-09"
},
  {
  "titre": "Isolation des combles : inutile pour le DPE sans isoler aussi les murs",
  "domaines": [
    "Travaux"
  ],
  "resume": "Isoler seulement les rampants de combles ne fait rien gagner sur le DPE si les murs donnant sur l'extérieur ne sont pas isolés en même temps. Le calcul du DPE ne valorise pas les postes isolés séparément à la pièce : il faut traiter l'ensemble de l'enveloppe (combles + murs) dans la même opération pour voir la note bouger.",
  "contexte": "À anticiper dans le chiffrage d'une rénovation énergétique : mieux vaut prévoir combles et murs dans le même lot de travaux plutôt que de les étaler dans le temps en espérant un gain progressif sur le DPE.",
  "source": "Conversation avec un artisan lors de la visite d'un bien à Lillebonne",
  "date_ajout": "2026-09"
},
  {
  "titre": "Plafond en lattis",
  "domaines": [
    "Travaux",
  ],
  "resume": "Un plafond en lattis (ou bacula) est un système ancien : de fines lattes de bois clouées sur les solives, recouvertes d'un enduit plâtre qui s'accroche via des renflements formés à l'arrière (les « champignons »). Il offre un bon cachet et une bonne isolation phonique naturelle, mais avec le temps le plâtre peut se désolidariser des lattes, provoquant fissures ou un son creux au toucher.",
  "contexte": "En cas de dégradation, deux options : reboucher/refixer les zones abîmées au plâtre, ou poser un faux plafond en plaques directement en dessous si la structure est trop endommagée pour être reprise telle quelle. Un son creux au tapotement lors d'une visite est un signe à vérifier.",
  "source": "Synthèse de plusieurs sources (fr.wikipedia.org — Bacula (bâtiment), decoplafond.com, magazine.plus-que-pro.fr)",
  "date_ajout": "2026-09"
},
  {
  "titre": "Rénovation : toile de verre",
  "domaines": [
    "Travaux"
  ],
  "resume": "Quatre approches possibles selon l'état de la toile de verre : la repeindre si elle est bien collée (nettoyage + sous-couche si besoin + peinture acrylique) ; réparer localement un décollement (recollage à la spatule) ou un trou (découpe et pièce de toile neuve encollée) ; ou la recouvrir d'un enduit de lissage en plusieurs passes si le relief gêne, sans la retirer.",
  "contexte": "En dernier recours, on peut la décoller entièrement, mais l'arrachage à sec est déconseillé : il libère des micro-fibres irritantes et risque d'arracher le placo/plâtre sous-jacent. Mieux vaut l'humidifier généreusement (voire décolleuse à vapeur) lé par lé, puis toujours appliquer une sous-couche d'impression avant de ré-enduire le support brut.",
  "source": "Synthèse de plusieurs sources (monsieurpeinture.com, toupret.com, onip.com, beissier.fr)",
  "date_ajout": "2026-09"
},
  {
  "titre": "Rénovation : parquet bois",
  "domaines": [
    "Travaux",
  ],
  "resume": "Rénover un parquet bois se fait en trois étapes : bien nettoyer le support, poncer à blanc pour retrouver le bois brut, puis appliquer une finition protectrice (vitrificateur ou huile). Avant de se lancer, il faut vérifier que la couche d'usure du bois est suffisante pour supporter un ponçage.",
  "contexte": "Ce point de vérification (épaisseur de la couche d'usure restante) est à checker lors d'une visite si le parquet semble terne ou rayé — un parquet déjà poncé plusieurs fois peut ne plus avoir assez de matière pour un nouveau ponçage, et devra être remplacé plutôt que rénové.",
  "source": "Synthèse de plusieurs sources (kiloutou.fr, lamaisondestravaux.com)",
  "date_ajout": "2026-09"
},
  {
  "titre": "Repérer un tableau électrique aux normes à l'œil",
  "domaines": [
    "Travaux",
  ],
  "resume": "La norme NF C 15-100 impose au moins 2 interrupteurs différentiels 30 mA par logement (davantage au-delà de 100 m²), et un même différentiel ne peut protéger plus de 8 disjoncteurs divisionnaires — ce qui rend un tableau à une seule rangée souvent insuffisant en pratique, sans que le nombre de rangées soit le critère de conformité en lui-même. Le tableau doit aussi conserver au moins 20% d'espace libre en réserve pour de futurs ajouts.",
  "contexte": "L'interrupteur différentiel coupe le courant en cas de fuite pour protéger les personnes ; la norme impose d'en répartir au moins deux (souvent un par rangée) pour éviter une coupure totale du logement en cas de déclenchement. Un tableau à une seule rangée, sans réserve visible, ou avec un seul différentiel pour toute l'installation sont des signaux à vérifier lors d'une visite.",
  "source": "Synthèse de plusieurs sources (legrand.fr, blog.123elec.com, izi-by-edf.fr, promotelec.com — norme NF C 15-100)",
  "date_ajout": "2026-09"
},
  {
  "titre": "Type de douche possible selon la hauteur de l'évacuation",
  "domaines": [
    "Travaux"
  ],
  "resume": "Le type de douche installable dépend de la hauteur de l'évacuation existante et de la pente gravitaire nécessaire (1 à 2 cm par mètre minimum). Évacuation au ras du sol : douche à l'italienne de plain-pied possible (receveur encastré ou chape hydrofuge). Évacuation basse (3-10 cm) : receveur extra-plat avec une petite marche pour loger la bonde.",
  "contexte": "Si l'évacuation est haute (plus de 10 cm), soit on accepte une douche classique surélevée sur socle (briques de verre, parpaings, pieds réglables), soit on installe une pompe de relevage sanitaire pour quand même obtenir une douche basse malgré une évacuation défavorable.",
  "date_ajout": "2026-09"
},
];
