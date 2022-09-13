/**
 * References:
 * - https://github.com/millsp/ts-toolbelt/blob/9f33d5631657a83dfd02824fbec6b67ecbc17de2/sources/Iteration/Iteration.ts
 * - https://github.com/millsp/ts-toolbelt/blob/ade34531de37f57ca03a883f48da99d9c9220d90/sources/Iteration/IterationOf.ts
 * - https://github.com/millsp/ts-toolbelt/blob/ade34531de37f57ca03a883f48da99d9c9220d90/sources/Iteration/Next.ts
 * - https://github.com/millsp/ts-toolbelt/blob/ade34531de37f57ca03a883f48da99d9c9220d90/sources/Iteration/Pos.ts
 * - https://github.com/millsp/ts-toolbelt/blob/ade34531de37f57ca03a883f48da99d9c9220d90/sources/Iteration/Prev.ts
 */

import { Id } from '../common/id';

type Sign = '-' | '0' | '+';

export interface Iteration {
  value: number;
  sign: Sign;
  prev: keyof IterationMap;
  next: keyof IterationMap;
  oppo: keyof IterationMap;
}

export const Unk = '__';
export type Unk = typeof Unk;

type IterationMap = Id<
  Record<string, Iteration>,
  {
    [Unk]: { value: number; sign: Sign; prev: Unk; next: Unk; oppo: Unk };
    '-100': { value: -100; sign: '-'; prev: Unk; next: '-99'; oppo: '100' };
    '-99': { value: -99; sign: '-'; prev: '-100'; next: '-98'; oppo: '99' };
    '-98': { value: -98; sign: '-'; prev: '-99'; next: '-97'; oppo: '98' };
    '-97': { value: -97; sign: '-'; prev: '-98'; next: '-96'; oppo: '97' };
    '-96': { value: -96; sign: '-'; prev: '-97'; next: '-95'; oppo: '96' };
    '-95': { value: -95; sign: '-'; prev: '-96'; next: '-94'; oppo: '95' };
    '-94': { value: -94; sign: '-'; prev: '-95'; next: '-93'; oppo: '94' };
    '-93': { value: -93; sign: '-'; prev: '-94'; next: '-92'; oppo: '93' };
    '-92': { value: -92; sign: '-'; prev: '-93'; next: '-91'; oppo: '92' };
    '-91': { value: -91; sign: '-'; prev: '-92'; next: '-90'; oppo: '91' };
    '-90': { value: -90; sign: '-'; prev: '-91'; next: '-89'; oppo: '90' };
    '-89': { value: -89; sign: '-'; prev: '-90'; next: '-88'; oppo: '89' };
    '-88': { value: -88; sign: '-'; prev: '-89'; next: '-87'; oppo: '88' };
    '-87': { value: -87; sign: '-'; prev: '-88'; next: '-86'; oppo: '87' };
    '-86': { value: -86; sign: '-'; prev: '-87'; next: '-85'; oppo: '86' };
    '-85': { value: -85; sign: '-'; prev: '-86'; next: '-84'; oppo: '85' };
    '-84': { value: -84; sign: '-'; prev: '-85'; next: '-83'; oppo: '84' };
    '-83': { value: -83; sign: '-'; prev: '-84'; next: '-82'; oppo: '83' };
    '-82': { value: -82; sign: '-'; prev: '-83'; next: '-81'; oppo: '82' };
    '-81': { value: -81; sign: '-'; prev: '-82'; next: '-80'; oppo: '81' };
    '-80': { value: -80; sign: '-'; prev: '-81'; next: '-79'; oppo: '80' };
    '-79': { value: -79; sign: '-'; prev: '-80'; next: '-78'; oppo: '79' };
    '-78': { value: -78; sign: '-'; prev: '-79'; next: '-77'; oppo: '78' };
    '-77': { value: -77; sign: '-'; prev: '-78'; next: '-76'; oppo: '77' };
    '-76': { value: -76; sign: '-'; prev: '-77'; next: '-75'; oppo: '76' };
    '-75': { value: -75; sign: '-'; prev: '-76'; next: '-74'; oppo: '75' };
    '-74': { value: -74; sign: '-'; prev: '-75'; next: '-73'; oppo: '74' };
    '-73': { value: -73; sign: '-'; prev: '-74'; next: '-72'; oppo: '73' };
    '-72': { value: -72; sign: '-'; prev: '-73'; next: '-71'; oppo: '72' };
    '-71': { value: -71; sign: '-'; prev: '-72'; next: '-70'; oppo: '71' };
    '-70': { value: -70; sign: '-'; prev: '-71'; next: '-69'; oppo: '70' };
    '-69': { value: -69; sign: '-'; prev: '-70'; next: '-68'; oppo: '69' };
    '-68': { value: -68; sign: '-'; prev: '-69'; next: '-67'; oppo: '68' };
    '-67': { value: -67; sign: '-'; prev: '-68'; next: '-66'; oppo: '67' };
    '-66': { value: -66; sign: '-'; prev: '-67'; next: '-65'; oppo: '66' };
    '-65': { value: -65; sign: '-'; prev: '-66'; next: '-64'; oppo: '65' };
    '-64': { value: -64; sign: '-'; prev: '-65'; next: '-63'; oppo: '64' };
    '-63': { value: -63; sign: '-'; prev: '-64'; next: '-62'; oppo: '63' };
    '-62': { value: -62; sign: '-'; prev: '-63'; next: '-61'; oppo: '62' };
    '-61': { value: -61; sign: '-'; prev: '-62'; next: '-60'; oppo: '61' };
    '-60': { value: -60; sign: '-'; prev: '-61'; next: '-59'; oppo: '60' };
    '-59': { value: -59; sign: '-'; prev: '-60'; next: '-58'; oppo: '59' };
    '-58': { value: -58; sign: '-'; prev: '-59'; next: '-57'; oppo: '58' };
    '-57': { value: -57; sign: '-'; prev: '-58'; next: '-56'; oppo: '57' };
    '-56': { value: -56; sign: '-'; prev: '-57'; next: '-55'; oppo: '56' };
    '-55': { value: -55; sign: '-'; prev: '-56'; next: '-54'; oppo: '55' };
    '-54': { value: -54; sign: '-'; prev: '-55'; next: '-53'; oppo: '54' };
    '-53': { value: -53; sign: '-'; prev: '-54'; next: '-52'; oppo: '53' };
    '-52': { value: -52; sign: '-'; prev: '-53'; next: '-51'; oppo: '52' };
    '-51': { value: -51; sign: '-'; prev: '-52'; next: '-50'; oppo: '51' };
    '-50': { value: -50; sign: '-'; prev: '-51'; next: '-49'; oppo: '50' };
    '-49': { value: -49; sign: '-'; prev: '-50'; next: '-48'; oppo: '49' };
    '-48': { value: -48; sign: '-'; prev: '-49'; next: '-47'; oppo: '48' };
    '-47': { value: -47; sign: '-'; prev: '-48'; next: '-46'; oppo: '47' };
    '-46': { value: -46; sign: '-'; prev: '-47'; next: '-45'; oppo: '46' };
    '-45': { value: -45; sign: '-'; prev: '-46'; next: '-44'; oppo: '45' };
    '-44': { value: -44; sign: '-'; prev: '-45'; next: '-43'; oppo: '44' };
    '-43': { value: -43; sign: '-'; prev: '-44'; next: '-42'; oppo: '43' };
    '-42': { value: -42; sign: '-'; prev: '-43'; next: '-41'; oppo: '42' };
    '-41': { value: -41; sign: '-'; prev: '-42'; next: '-40'; oppo: '41' };
    '-40': { value: -40; sign: '-'; prev: '-41'; next: '-39'; oppo: '40' };
    '-39': { value: -39; sign: '-'; prev: '-40'; next: '-38'; oppo: '39' };
    '-38': { value: -38; sign: '-'; prev: '-39'; next: '-37'; oppo: '38' };
    '-37': { value: -37; sign: '-'; prev: '-38'; next: '-36'; oppo: '37' };
    '-36': { value: -36; sign: '-'; prev: '-37'; next: '-35'; oppo: '36' };
    '-35': { value: -35; sign: '-'; prev: '-36'; next: '-34'; oppo: '35' };
    '-34': { value: -34; sign: '-'; prev: '-35'; next: '-33'; oppo: '34' };
    '-33': { value: -33; sign: '-'; prev: '-34'; next: '-32'; oppo: '33' };
    '-32': { value: -32; sign: '-'; prev: '-33'; next: '-31'; oppo: '32' };
    '-31': { value: -31; sign: '-'; prev: '-32'; next: '-30'; oppo: '31' };
    '-30': { value: -30; sign: '-'; prev: '-31'; next: '-29'; oppo: '30' };
    '-29': { value: -29; sign: '-'; prev: '-30'; next: '-28'; oppo: '29' };
    '-28': { value: -28; sign: '-'; prev: '-29'; next: '-27'; oppo: '28' };
    '-27': { value: -27; sign: '-'; prev: '-28'; next: '-26'; oppo: '27' };
    '-26': { value: -26; sign: '-'; prev: '-27'; next: '-25'; oppo: '26' };
    '-25': { value: -25; sign: '-'; prev: '-26'; next: '-24'; oppo: '25' };
    '-24': { value: -24; sign: '-'; prev: '-25'; next: '-23'; oppo: '24' };
    '-23': { value: -23; sign: '-'; prev: '-24'; next: '-22'; oppo: '23' };
    '-22': { value: -22; sign: '-'; prev: '-23'; next: '-21'; oppo: '22' };
    '-21': { value: -21; sign: '-'; prev: '-22'; next: '-20'; oppo: '21' };
    '-20': { value: -20; sign: '-'; prev: '-21'; next: '-19'; oppo: '20' };
    '-19': { value: -19; sign: '-'; prev: '-20'; next: '-18'; oppo: '19' };
    '-18': { value: -18; sign: '-'; prev: '-19'; next: '-17'; oppo: '18' };
    '-17': { value: -17; sign: '-'; prev: '-18'; next: '-16'; oppo: '17' };
    '-16': { value: -16; sign: '-'; prev: '-17'; next: '-15'; oppo: '16' };
    '-15': { value: -15; sign: '-'; prev: '-16'; next: '-14'; oppo: '15' };
    '-14': { value: -14; sign: '-'; prev: '-15'; next: '-13'; oppo: '14' };
    '-13': { value: -13; sign: '-'; prev: '-14'; next: '-12'; oppo: '13' };
    '-12': { value: -12; sign: '-'; prev: '-13'; next: '-11'; oppo: '12' };
    '-11': { value: -11; sign: '-'; prev: '-12'; next: '-10'; oppo: '11' };
    '-10': { value: -10; sign: '-'; prev: '-11'; next: '-9'; oppo: '10' };
    '-9': { value: -9; sign: '-'; prev: '-10'; next: '-8'; oppo: '9' };
    '-8': { value: -8; sign: '-'; prev: '-9'; next: '-7'; oppo: '8' };
    '-7': { value: -7; sign: '-'; prev: '-8'; next: '-6'; oppo: '7' };
    '-6': { value: -6; sign: '-'; prev: '-7'; next: '-5'; oppo: '6' };
    '-5': { value: -5; sign: '-'; prev: '-6'; next: '-4'; oppo: '5' };
    '-4': { value: -4; sign: '-'; prev: '-5'; next: '-3'; oppo: '4' };
    '-3': { value: -3; sign: '-'; prev: '-4'; next: '-2'; oppo: '3' };
    '-2': { value: -2; sign: '-'; prev: '-3'; next: '-1'; oppo: '2' };
    '-1': { value: -1; sign: '-'; prev: '-2'; next: '0'; oppo: '1' };
    '0': { value: 0; sign: '0'; prev: '-1'; next: '1'; oppo: '0' };
    '1': { value: 1; sign: '+'; prev: '0'; next: '2'; oppo: '-1' };
    '2': { value: 2; sign: '+'; prev: '1'; next: '3'; oppo: '-2' };
    '3': { value: 3; sign: '+'; prev: '2'; next: '4'; oppo: '-3' };
    '4': { value: 4; sign: '+'; prev: '3'; next: '5'; oppo: '-4' };
    '5': { value: 5; sign: '+'; prev: '4'; next: '6'; oppo: '-5' };
    '6': { value: 6; sign: '+'; prev: '5'; next: '7'; oppo: '-6' };
    '7': { value: 7; sign: '+'; prev: '6'; next: '8'; oppo: '-7' };
    '8': { value: 8; sign: '+'; prev: '7'; next: '9'; oppo: '-8' };
    '9': { value: 9; sign: '+'; prev: '8'; next: '10'; oppo: '-9' };
    '10': { value: 10; sign: '+'; prev: '9'; next: '11'; oppo: '-10' };
    '11': { value: 11; sign: '+'; prev: '10'; next: '12'; oppo: '-11' };
    '12': { value: 12; sign: '+'; prev: '11'; next: '13'; oppo: '-12' };
    '13': { value: 13; sign: '+'; prev: '12'; next: '14'; oppo: '-13' };
    '14': { value: 14; sign: '+'; prev: '13'; next: '15'; oppo: '-14' };
    '15': { value: 15; sign: '+'; prev: '14'; next: '16'; oppo: '-15' };
    '16': { value: 16; sign: '+'; prev: '15'; next: '17'; oppo: '-16' };
    '17': { value: 17; sign: '+'; prev: '16'; next: '18'; oppo: '-17' };
    '18': { value: 18; sign: '+'; prev: '17'; next: '19'; oppo: '-18' };
    '19': { value: 19; sign: '+'; prev: '18'; next: '20'; oppo: '-19' };
    '20': { value: 20; sign: '+'; prev: '19'; next: '21'; oppo: '-20' };
    '21': { value: 21; sign: '+'; prev: '20'; next: '22'; oppo: '-21' };
    '22': { value: 22; sign: '+'; prev: '21'; next: '23'; oppo: '-22' };
    '23': { value: 23; sign: '+'; prev: '22'; next: '24'; oppo: '-23' };
    '24': { value: 24; sign: '+'; prev: '23'; next: '25'; oppo: '-24' };
    '25': { value: 25; sign: '+'; prev: '24'; next: '26'; oppo: '-25' };
    '26': { value: 26; sign: '+'; prev: '25'; next: '27'; oppo: '-26' };
    '27': { value: 27; sign: '+'; prev: '26'; next: '28'; oppo: '-27' };
    '28': { value: 28; sign: '+'; prev: '27'; next: '29'; oppo: '-28' };
    '29': { value: 29; sign: '+'; prev: '28'; next: '30'; oppo: '-29' };
    '30': { value: 30; sign: '+'; prev: '29'; next: '31'; oppo: '-30' };
    '31': { value: 31; sign: '+'; prev: '30'; next: '32'; oppo: '-31' };
    '32': { value: 32; sign: '+'; prev: '31'; next: '33'; oppo: '-32' };
    '33': { value: 33; sign: '+'; prev: '32'; next: '34'; oppo: '-33' };
    '34': { value: 34; sign: '+'; prev: '33'; next: '35'; oppo: '-34' };
    '35': { value: 35; sign: '+'; prev: '34'; next: '36'; oppo: '-35' };
    '36': { value: 36; sign: '+'; prev: '35'; next: '37'; oppo: '-36' };
    '37': { value: 37; sign: '+'; prev: '36'; next: '38'; oppo: '-37' };
    '38': { value: 38; sign: '+'; prev: '37'; next: '39'; oppo: '-38' };
    '39': { value: 39; sign: '+'; prev: '38'; next: '40'; oppo: '-39' };
    '40': { value: 40; sign: '+'; prev: '39'; next: '41'; oppo: '-40' };
    '41': { value: 41; sign: '+'; prev: '40'; next: '42'; oppo: '-41' };
    '42': { value: 42; sign: '+'; prev: '41'; next: '43'; oppo: '-42' };
    '43': { value: 43; sign: '+'; prev: '42'; next: '44'; oppo: '-43' };
    '44': { value: 44; sign: '+'; prev: '43'; next: '45'; oppo: '-44' };
    '45': { value: 45; sign: '+'; prev: '44'; next: '46'; oppo: '-45' };
    '46': { value: 46; sign: '+'; prev: '45'; next: '47'; oppo: '-46' };
    '47': { value: 47; sign: '+'; prev: '46'; next: '48'; oppo: '-47' };
    '48': { value: 48; sign: '+'; prev: '47'; next: '49'; oppo: '-48' };
    '49': { value: 49; sign: '+'; prev: '48'; next: '50'; oppo: '-49' };
    '50': { value: 50; sign: '+'; prev: '49'; next: '51'; oppo: '-50' };
    '51': { value: 51; sign: '+'; prev: '50'; next: '52'; oppo: '-51' };
    '52': { value: 52; sign: '+'; prev: '51'; next: '53'; oppo: '-52' };
    '53': { value: 53; sign: '+'; prev: '52'; next: '54'; oppo: '-53' };
    '54': { value: 54; sign: '+'; prev: '53'; next: '55'; oppo: '-54' };
    '55': { value: 55; sign: '+'; prev: '54'; next: '56'; oppo: '-55' };
    '56': { value: 56; sign: '+'; prev: '55'; next: '57'; oppo: '-56' };
    '57': { value: 57; sign: '+'; prev: '56'; next: '58'; oppo: '-57' };
    '58': { value: 58; sign: '+'; prev: '57'; next: '59'; oppo: '-58' };
    '59': { value: 59; sign: '+'; prev: '58'; next: '60'; oppo: '-59' };
    '60': { value: 60; sign: '+'; prev: '59'; next: '61'; oppo: '-60' };
    '61': { value: 61; sign: '+'; prev: '60'; next: '62'; oppo: '-61' };
    '62': { value: 62; sign: '+'; prev: '61'; next: '63'; oppo: '-62' };
    '63': { value: 63; sign: '+'; prev: '62'; next: '64'; oppo: '-63' };
    '64': { value: 64; sign: '+'; prev: '63'; next: '65'; oppo: '-64' };
    '65': { value: 65; sign: '+'; prev: '64'; next: '66'; oppo: '-65' };
    '66': { value: 66; sign: '+'; prev: '65'; next: '67'; oppo: '-66' };
    '67': { value: 67; sign: '+'; prev: '66'; next: '68'; oppo: '-67' };
    '68': { value: 68; sign: '+'; prev: '67'; next: '69'; oppo: '-68' };
    '69': { value: 69; sign: '+'; prev: '68'; next: '70'; oppo: '-69' };
    '70': { value: 70; sign: '+'; prev: '69'; next: '71'; oppo: '-70' };
    '71': { value: 71; sign: '+'; prev: '70'; next: '72'; oppo: '-71' };
    '72': { value: 72; sign: '+'; prev: '71'; next: '73'; oppo: '-72' };
    '73': { value: 73; sign: '+'; prev: '72'; next: '74'; oppo: '-73' };
    '74': { value: 74; sign: '+'; prev: '73'; next: '75'; oppo: '-74' };
    '75': { value: 75; sign: '+'; prev: '74'; next: '76'; oppo: '-75' };
    '76': { value: 76; sign: '+'; prev: '75'; next: '77'; oppo: '-76' };
    '77': { value: 77; sign: '+'; prev: '76'; next: '78'; oppo: '-77' };
    '78': { value: 78; sign: '+'; prev: '77'; next: '79'; oppo: '-78' };
    '79': { value: 79; sign: '+'; prev: '78'; next: '80'; oppo: '-79' };
    '80': { value: 80; sign: '+'; prev: '79'; next: '81'; oppo: '-80' };
    '81': { value: 81; sign: '+'; prev: '80'; next: '82'; oppo: '-81' };
    '82': { value: 82; sign: '+'; prev: '81'; next: '83'; oppo: '-82' };
    '83': { value: 83; sign: '+'; prev: '82'; next: '84'; oppo: '-83' };
    '84': { value: 84; sign: '+'; prev: '83'; next: '85'; oppo: '-84' };
    '85': { value: 85; sign: '+'; prev: '84'; next: '86'; oppo: '-85' };
    '86': { value: 86; sign: '+'; prev: '85'; next: '87'; oppo: '-86' };
    '87': { value: 87; sign: '+'; prev: '86'; next: '88'; oppo: '-87' };
    '88': { value: 88; sign: '+'; prev: '87'; next: '89'; oppo: '-88' };
    '89': { value: 89; sign: '+'; prev: '88'; next: '90'; oppo: '-89' };
    '90': { value: 90; sign: '+'; prev: '89'; next: '91'; oppo: '-90' };
    '91': { value: 91; sign: '+'; prev: '90'; next: '92'; oppo: '-91' };
    '92': { value: 92; sign: '+'; prev: '91'; next: '93'; oppo: '-92' };
    '93': { value: 93; sign: '+'; prev: '92'; next: '94'; oppo: '-93' };
    '94': { value: 94; sign: '+'; prev: '93'; next: '95'; oppo: '-94' };
    '95': { value: 95; sign: '+'; prev: '94'; next: '96'; oppo: '-95' };
    '96': { value: 96; sign: '+'; prev: '95'; next: '97'; oppo: '-96' };
    '97': { value: 97; sign: '+'; prev: '96'; next: '98'; oppo: '-97' };
    '98': { value: 98; sign: '+'; prev: '97'; next: '99'; oppo: '-98' };
    '99': { value: 99; sign: '+'; prev: '98'; next: '100'; oppo: '-99' };
    '100': { value: 100; sign: '+'; prev: '99'; next: Unk; oppo: '-100' };
  }
>;

export type IterationOf<Num extends number> =
  `${Num}` extends keyof IterationMap
    ? IterationMap[`${Num}`]
    : IterationMap[Unk];

export type Next<Iter extends Iteration> = IterationMap[Iter['next']];

export type Oppo<Iter extends Iteration> = IterationMap[Iter['oppo']];

export type Prev<Iter extends Iteration> = IterationMap[Iter['prev']];

export type Value<Iter extends Iteration> = Iter['value'];
