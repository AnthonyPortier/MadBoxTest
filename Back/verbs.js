// Les 500 premiers mots de la liste fournie 
let verbs = {
    0: "abaisser",
    1: "abandonner",
    2: "abasourdir",
    3: "abâtardir",
    4: "abattre",
    5: "abcéder",
    6: "abdiquer",
    7: "abécher",
    8: "aberrer",
    9: "abêtir",
    10: "abhorrer",
    11: "abîmer",
    12: "abjurer",
    13: "ablater",
    14: "ablatir",
    15: "abloquer",
    16: "abolir",
    17: "abomber",
    18: "abominer",
    19: "abonder",
    20: "abonner",
    21: "abonnir",
    22: "aborder",
    23: "aboucher",
    24: "abouler",
    25: "abouter",
    26: "aboutir",
    27: "aboyer",
    28: "abraquer",
    29: "abraser",
    30: "abréger",
    31: "abreuver",
    32: "abricoter",
    33: "abriter",
    34: "abroger",
    35: "abrutir",
    36: "absorber",
    37: "absoudre",
    38: "abstraire",
    39: "abuser",
    40: "accabler",
    41: "accaparer",
    42: "accastiller",
    43: "accéder",
    44: "accélérer",
    45: "accentuer",
    46: "accepter",
    47: "accessoiriser",
    48: "accidenter",
    49: "acclamer",
    50: "acclimater",
    51: "accoler",
    52: "accommoder",
    53: "accompagner",
    54: "accomplir",
    55: "accorder",
    56: "accorer",
    57: "accoster",
    58: "accoter",
    59: "accoucher",
    60: "accouer",
    61: "accoupler",
    62: "accourcir",
    63: "accourir",
    64: "accoutrer",
    65: "accoutumer",
    66: "accréditer",
    67: "accrocher",
    68: "accroître",
    69: "accroire",
    70: "accueillir",
    71: "acculer",
    72: "acculturer",
    73: "accumuler",
    74: "accuser",
    75: "acenser",
    76: "acérer",
    77: "acétifier",
    78: "acétyler",
    79: "achalander",
    80: "achaler",
    81: "acharner",
    82: "acheminer",
    83: "acheter",
    84: "achever",
    85: "achopper",
    86: "achromatiser",
    87: "acidifier",
    88: "aciduler",
    89: "aciérer",
    90: "aciériser",
    91: "aciseler",
    92: "acmoder",
    93: "acquérir",
    94: "acquiescer",
    95: "acquitter",
    96: "acter",
    97: "actionner",
    98: "activer",
    99: "actualiser",
    100: "adapter",
    101: "additionner",
    102: "adhérer",
    103: "adjectiver",
    104: "adjectiviser",
    105: "adjoindre",
    106: "adjuger",
    107: "adjurer",
    108: "admettre",
    109: "administrer",
    110: "admirer",
    111: "admonester",
    112: "adonner",
    113: "adopter",
    114: "adorer",
    115: "adosser",
    116: "adouber",
    117: "adoucir",
    118: "adresser",
    119: "adsorber",
    120: "aduler",
    121: "adultérer",
    122: "advenir",
    123: "adverbialiser",
    124: "aérer",
    125: "affabuler",
    126: "affadir",
    127: "affaiblir",
    128: "affaisser",
    129: "affaiter",
    130: "affaler",
    131: "affamer",
    132: "afféager",
    133: "affecter",
    134: "affectionner",
    135: "afférer",
    136: "affermer",
    137: "affermir",
    138: "afficher",
    139: "affiler",
    140: "affilier",
    141: "affiner",
    142: "affirmer",
    143: "affleurer",
    144: "affliger",
    145: "afflouer",
    146: "affluer",
    147: "affoler",
    148: "affouager",
    149: "affouiller",
    150: "affourager",
    151: "affourcher",
    152: "affourrager",
    153: "affranchir",
    154: "affréter",
    155: "affriander",
    156: "affricher",
    157: "affrioler",
    158: "affriter",
    159: "affronter",
    160: "affruiter",
    161: "affubler",
    162: "affurer",
    163: "affûter",
    164: "africaniser",
    165: "agacer",
    166: "agencer",
    167: "agglomérer",
    168: "agglutiner",
    169: "aggraver",
    170: "agioter",
    171: "agir",
    172: "agiter",
    173: "agneler",
    174: "agoincher",
    175: "agonir",
    176: "agoniser",
    177: "agrafer",
    178: "agrandir",
    179: "agréer",
    180: "agréger",
    181: "agrémenter",
    182: "agresser",
    183: "agricher",
    184: "agripper",
    185: "aguerrir",
    186: "aguicher",
    187: "ahaner",
    188: "ahurir",
    189: "aicher",
    190: "aider",
    191: "aigrir",
    192: "aiguiller",
    193: "aiguilleter",
    194: "aiguillonner",
    195: "aiguiser",
    196: "ailler",
    197: "aimanter",
    198: "aimer",
    199: "airer",
    200: "ajointer",
    201: "ajourer",
    202: "ajourner",
    203: "ajouter",
    204: "ajuster",
    205: "alambiquer",
    206: "alanguir",
    207: "alarmer",
    208: "alcaliniser",
    209: "alcaliser",
    210: "alcooliser",
    211: "alentir",
    212: "alerter",
    213: "aléser",
    214: "aleviner",
    215: "aliéner",
    216: "aligner",
    217: "alimenter",
    218: "aliter",
    219: "allaiter",
    220: "allécher",
    221: "alléger",
    222: "allégir",
    223: "allégoriser",
    224: "alléguer",
    225: "aller",
    226: "allier",
    227: "allonger",
    228: "allouer",
    229: "allumer",
    230: "alluvionner",
    231: "alourdir",
    232: "alpaguer",
    233: "alphabétiser",
    234: "altérer",
    235: "alterner",
    236: "aluminer",
    237: "aluner",
    238: "alunir",
    239: "amadouer",
    240: "amaigrir",
    241: "amalgamer",
    242: "amariner",
    243: "amarrer",
    244: "amasser",
    245: "amatir",
    246: "ambiancer",
    247: "ambitionner",
    248: "ambler",
    249: "ambrer",
    250: "améliorer",
    251: "aménager",
    252: "amender",
    253: "amener",
    254: "amenuiser",
    255: "américaniser",
    256: "amerrir",
    257: "ameublir",
    258: "ameuter",
    259: "amidonner",
    260: "amincir",
    261: "aminer",
    262: "amnistier",
    263: "amocher",
    264: "amodier",
    265: "amoindrir",
    266: "amollir",
    267: "amonceler",
    268: "amorcer",
    269: "amordancer",
    270: "amortir",
    271: "amourer",
    272: "amplifier",
    273: "amputer",
    274: "amurer",
    275: "amuser",
    276: "analgésier",
    277: "analyser",
    278: "anastomoser",
    279: "anathématiser",
    280: "anatomiser",
    281: "ancrer",
    282: "anéantir",
    283: "anémier",
    284: "anesthésier",
    285: "anglaiser",
    286: "angliciser",
    287: "angoisser",
    288: "anhéler",
    289: "animaliser",
    290: "animer",
    291: "aniser",
    292: "ankyloser",
    293: "anneler",
    294: "annexer",
    295: "annihiler",
    296: "annoncer",
    297: "annoter",
    298: "annualiser",
    299: "annuler",
    300: "anoblir",
    301: "anodiser",
    302: "anonner",
    303: "anordir",
    304: "antéposer",
    305: "anticiper",
    306: "antidater",
    307: "aoûter",
    308: "apaiser",
    309: "apanager",
    310: "apatamer",
    311: "apercevoir",
    312: "apeurer",
    313: "apiquer",
    314: "apitoyer",
    315: "aplanir",
    316: "aplatir",
    317: "aplomber",
    318: "apostasier",
    319: "aposter",
    320: "apostiller",
    321: "apostropher",
    322: "appairer",
    323: "apparaître",
    324: "appareiller",
    325: "apparenter",
    326: "apparier",
    327: "appartenir",
    328: "appâter",
    329: "appauvrir",
    330: "appeler",
    331: "appendre",
    332: "appertiser",
    333: "appesantir",
    334: "appéter",
    335: "applaudir",
    336: "appliquer",
    337: "appointer",
    338: "appointir",
    339: "apponter",
    340: "apporter",
    341: "apposer",
    342: "apprécier",
    343: "appréhender",
    344: "apprendre",
    345: "apprêter",
    346: "apprivoiser",
    347: "approcher",
    348: "approfondir",
    349: "approprier",
    350: "approuver",
    351: "approvisionner",
    352: "appuyer",
    353: "apurer",
    354: "aquiger",
    355: "arabiser",
    356: "araser",
    357: "arbitrer",
    358: "arborer",
    359: "arboriser",
    360: "arc",
    361: "bouter",
    362: "archaïser",
    363: "architecturer",
    364: "archiver",
    365: "arçonner",
    366: "ardoiser",
    367: "argenter",
    368: "argotiser",
    369: "argougner",
    370: "arguer",
    371: "argumenter",
    372: "ariser",
    373: "armer",
    374: "armorier",
    375: "arnaquer",
    376: "aromatiser",
    377: "arpéger",
    378: "arpenter",
    379: "arpigner",
    380: "arquebuser",
    381: "arquepincer",
    382: "arquer",
    383: "arracher",
    384: "arraisonner",
    385: "arranger",
    386: "arrenter",
    387: "arrérager",
    388: "arrêter",
    389: "arriérer",
    390: "arrimer",
    391: "arriser",
    392: "arriver",
    393: "arrondir",
    394: "arroser",
    395: "articuler",
    396: "artiller",
    397: "ascensionner",
    398: "aseptiser",
    399: "aspecter",
    400: "asperger",
    401: "asphalter",
    402: "asphyxier",
    403: "aspirer",
    404: "assabler",
    405: "assagir",
    406: "assaillir",
    407: "assainir",
    408: "assaisonner",
    409: "assarmenter",
    410: "assassiner",
    411: "assavoir",
    412: "assécher",
    413: "assembler",
    414: "assener",
    415: "asseoir",
    416: "assermenter",
    417: "asservir",
    418: "assibiler",
    419: "assiéger",
    420: "assigner",
    421: "assimiler",
    422: "assister",
    423: "associer",
    424: "assoiffer",
    425: "assoler",
    426: "assombrir",
    427: "assommer",
    428: "assoner",
    429: "assortir",
    430: "assoupir",
    431: "assouplir",
    432: "assourdir",
    433: "assouvir",
    434: "assujettir",
    435: "assumer",
    436: "assurer",
    437: "asticoter",
    438: "astiquer",
    439: "astreindre",
    440: "atermoyer",
    441: "atomiser",
    442: "atrophier",
    443: "attabler",
    444: "attacher",
    445: "attaquer",
    446: "attarder",
    447: "atteindre",
    448: "atteler",
    449: "attendre",
    450: "attendrir",
    451: "attenter",
    452: "atténuer",
    453: "atterrer",
    454: "atterrir",
    455: "attester",
    456: "attibuer",
    457: "attiédir",
    458: "attifer",
    459: "attiger",
    460: "attirer",
    461: "attiser",
    462: "attitrer",
    463: "attraper",
    464: "attribuer",
    465: "attriquer",
    466: "attrister",
    467: "attrouper",
    468: "auditer",
    469: "auditionner",
    470: "augmenter",
    471: "augurer",
    472: "auréoler",
    473: "aurifier",
    474: "ausculter",
    475: "authentifier",
    476: "authentiquer",
    477: "autodétruire",
    478: "autofinancer",
    479: "autographier",
    480: "automatiser",
    481: "autopsier",
    482: "autoriser",
    483: "autosuggestionne",
    484: "avachir",
    485: "avaler",
    486: "avaliser",
    487: "avancer",
    488: "avantager",
    489: "avarier",
    490: "aveindre",
    491: "avenir",
    492: "aventurer",
    493: "avertir",
    494: "aveugler",
    495: "aveulir",
    496: "avilir",
    497: "aviner",
    498: "aviser",
    499: "avitailler",
    500: "aviver"
}

// push des mots avec un level
const promise = new Promise(resolve => {
    resolve(Object.values(verbs).map(frenchWord => {
        return {
            word: frenchWord,
            level: Math.floor(Math.random() * 11)
        }
    }))

})
module.exports = promise