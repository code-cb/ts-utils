import { assert, Equals } from 'common';
import * as S from 'string';

describe(`S.CamelToSnake and S.camelCaseToSnake`, () => {
  it(`works`, () => {
    assert<Equals<S.CamelToSnake<string>, string>>;
    const s: string = 'camelToSnake';
    const s0 = S.camelToSnake(s);
    assert<Equals<typeof s0, string>>;
    expect(s0).toBe('camel-to-snake');

    assert<Equals<S.CamelToSnake<''>, ''>>;
    const s1 = S.camelToSnake('');
    assert<Equals<typeof s1, ''>>;
    expect(s1).toBe('');

    assert<Equals<S.CamelToSnake<'a'>, 'a'>>;
    const s2 = S.camelToSnake('a');
    assert<Equals<typeof s2, 'a'>>;
    expect(s2).toBe('a');

    assert<Equals<S.CamelToSnake<'abc'>, 'abc'>>;
    const s3 = S.camelToSnake('abc');
    assert<Equals<typeof s3, 'abc'>>;
    expect(s3).toBe('abc');

    assert<Equals<S.CamelToSnake<'A'>, 'a'>>;
    const s4 = S.camelToSnake('A');
    assert<Equals<typeof s4, 'a'>>;
    expect(s4).toBe('a');

    assert<Equals<S.CamelToSnake<'Abc'>, 'abc'>>;
    const s5 = S.camelToSnake('Abc');
    assert<Equals<typeof s5, 'abc'>>;
    expect(s5).toBe('abc');

    assert<Equals<S.CamelToSnake<'ABC'>, 'a-b-c'>>;
    const s6 = S.camelToSnake('ABC');
    assert<Equals<typeof s6, 'a-b-c'>>;
    expect(s6).toBe('a-b-c');

    assert<Equals<S.CamelToSnake<'SwiperContainer'>, 'swiper-container'>>;
    const s7 = S.camelToSnake('SwiperContainer');
    assert<Equals<typeof s7, 'swiper-container'>>;
    expect(s7).toBe('swiper-container');

    assert<Equals<S.CamelToSnake<'slidesPerView'>, 'slides-per-view'>>;
    const s8 = S.camelToSnake('slidesPerView');
    assert<Equals<typeof s8, 'slides-per-view'>>;
    expect(s8).toBe('slides-per-view');
  });
});
