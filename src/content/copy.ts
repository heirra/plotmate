/**
 * Central copy / i18n system for Garden Vibe AI.
 *
 * HOW TO SWITCH LOCALE
 * ────────────────────
 * Change the LOCALE constant below:
 *   'ko'   → Korean  (internal product-review mode)
 *   'enGB' → British English  (production)
 *
 * Rules:
 *  - Product names, retailer names, and plant names stay in English in both locales.
 *  - All visible UI text (labels, headings, CTAs, hints, placeholders) lives here.
 *  - Dynamic strings that embed a number/amount use arrow functions.
 */

export type Locale = 'ko' | 'enGB';

/** ← Change this to switch the active display language */
export const LOCALE: Locale = 'ko';

// ─────────────────────────────────────────────────────────────────────────────
// Locale data
// ─────────────────────────────────────────────────────────────────────────────

const locales = {

  /* ══════════════════════════════════════════════════════════════
     KOREAN  (내부 제품 검토용)
  ══════════════════════════════════════════════════════════════ */
  ko: {

    /* ── Navbar ─────────────────────────────────────────────── */
    nav: {
      howItWorks:  '이용 방법',
      gardenPlans: '가든 플랜',
      shop:        '쇼핑',
      plantGuide:  '식물 가이드',
      inspiration: '인스피레이션',
      aboutUs:     '소개',
      login:       '로그인',
      getStarted:  '시작하기',
    },

    /* ── Hero ───────────────────────────────────────────────── */
    hero: {
      headLine1:          '나만의 공간.',
      headLine2:          '완벽한',
      headLineAccent:     '가든 플랜.',
      sub:                'AI가 만드는 가든 플랜 — 실제 영국 제품으로.',
      body:               '공간 정보를 알려주시면, 아름답고 실용적으로 구현 가능한 맞춤 쇼핑 플랜을 만들어 드립니다.',
      ctaPrimary:         '내 가든 플랜 만들기',
      ctaSecondary:       '예시 플랜 보기',
      trust:              ['실제 영국 제품', '공간 맞춤 설계', '따라 하기 쉬운', '초보자도 OK'],
      floatTitle:         '영국 정원을 위해 설계됨',
      floatSub:           '가드닝 애호가들의 선택',
      imgPlaceholderTitle:'정원 사진 위치',
      imgPlaceholderSub:  '이미지 추가 위치:',
    },

    /* ── How It Works ───────────────────────────────────────── */
    howItWorks: {
      heading: '이용 방법',
      steps: [
        '내 공간 알려주기',
        'AI가 가든 플랜 생성',
        '쇼핑 리스트 확인',
        '신뢰할 수 있는 UK 판매처에서 구매',
      ],
      popularHeading: '인기 플랜',
      popularPlans:   ['소형 파티오', '임차 발코니', '북향 정원', '저관리 플랜', '야생동물 친화', '코티지 스타일'],
      featuredTitle:  '소형 북향\n파티오 가든',
      featuredPrice:  '£120부터',
      featuredTags:   '저관리 · 쉬움 · 음지 식물',
      featuredCta:    '이 플랜 보기',
      // "What's included in your plan" — middle word is highlighted
      includedHeadingPre:  '플랜에',
      includedHeadingMid:  '포함된',
      includedHeadingPost: '항목',
      includedItems: [
        '맞춤 가든 레이아웃 & 팁',
        '식물 & 제품 추천',
        '단계별 쉬운 가이드',
        '예산 포함 쇼핑 리스트',
        '장기 관리 가이드',
      ],
      // "Real products from trusted UK retailers"
      retailersHeadingPre: '신뢰할 수 있는 UK 판매처의',
      retailersHeadingMid: '실제 제품',
      retailersNote:       'Crocus, Primrose, Thompson & Morgan, Sarah Raven, amazon.co.uk 등 신뢰할 수 있는 영국 판매처로 직접 연결됩니다.',
      valueProps: [
        { title: '초보자 친화적',    desc: '누구나 따라 할 수 있는 간단한 플랜.' },
        { title: '현실적이고 실용적', desc: '공간, 시간, 예산에 맞는 플랜.' },
        { title: '아름답고 지속 가능한', desc: '오래도록 사랑할 수 있는 정원 만들기.' },
      ],
    },

    /* ── Final CTA ──────────────────────────────────────────── */
    finalCta: {
      badge:        '무료 사용 · 계정 불필요',
      headLine1:    '당신의 정원, 몇 분 만에',
      headLine2:    '완성됩니다.',
      body:         'Garden Vibe AI는 UK 홈오너가 전문 디자이너 없이도 아름다운 야외 공간을 자신있게 설계할 수 있도록 돕습니다.',
      ctaPrimary:   '무료로 시작하기',
      ctaSecondary: '예시 정원 보기',
      features:     ['8가지 가든 스타일', 'UK 기후 맞춤 식물', '즉시 쇼핑 리스트', '가입 불필요'],
      retailerNote: '실제 영국 제품: Crocus, Thompson & Morgan, Primrose, Sarah Raven 등에서 제공됩니다.',
    },

    /* ── Builder page chrome ────────────────────────────────── */
    builder: {
      back:       '뒤로',
      breadcrumb: '플랜 빌더',
      tabs: {
        overview:  '개요',
        placement: '배치 가이드',
        shopping:  '쇼핑 리스트',
        preview:   '시각 미리보기',
      },
    },

    /* ── Project Settings ───────────────────────────────────── */
    settings: {
      title:    '가든 설정',
      subtitle: '설정 변경 시 플랜이 실시간 업데이트됩니다',

      postcodeLabel: '우편번호 지역',
      postcodeHint:  '지역에 맞는 식물 선택을 최적화합니다',

      spaceTypeLabel: '공간 유형',
      // value → display label (value stays in English to match AppState type)
      spaceTypeLabels: {
        'Back garden': '뒤뜰',
        'Front garden': '앞마당',
        'Patio':        '파티오',
        'Courtyard':    '안뜰',
        'Balcony':      '발코니',
        'Side return':  '측면 공간',
      } as Record<string, string>,

      gardenStyleLabel: '가든 스타일',
      gardenStyleLabels: {
        'cottage':          '코티지 가든',
        'modern-courtyard': '모던 코트야드',
        'wildlife':         '야생동물 가든',
        'mediterranean':    '지중해 파티오',
        'low-maintenance':  '저관리 미니멀',
        'naturalistic':     '자연주의 가든',
        'korean-zen':       '한국 젠',
        'family-friendly':  '가족 친화 가든',
      } as Record<string, string>,

      maintenanceLabel: '관리 수준',
      maintenanceLabels: {
        Low:      '낮음',
        Moderate: '보통',
        High:     '높음',
      } as Record<string, string>,

      sunlightLabel: '햇빛',
      sunlightLabels: {
        'Full sun':     '완전 양지',
        'Part shade':   '반음지',
        'Mostly shade': '주로 음지',
      } as Record<string, string>,
      sunlightHints: {
        'Full sun':     '6시간 이상 직사광선',
        'Part shade':   '3–6시간 직사광선',
        'Mostly shade': '3시간 미만 직사광선',
      } as Record<string, string>,

      budgetLabel: '예산',
      budgetRange: '£500 – £10,000+',

      mainGoalLabel: '주요 목표',
      mainGoalLabels: {
        'Relaxing':          '휴식',
        'Outdoor Dining':    '야외 식사',
        'Low Maintenance':   '저관리',
        'Curb Appeal':       '외관 개선',
        'Pet Friendly':      '반려동물 친화',
        'Wildlife Friendly': '야생동물 친화',
        'Privacy':           '프라이버시',
      } as Record<string, string>,

      updateBtn:  '디자인 업데이트',
      updateNote: '설정을 변경하면 플랜이 실시간으로 업데이트됩니다',
    },

    /* ── Common difficulty / budget labels ──────────────────── */
    common: {
      difficultyLabels: {
        Easy:      '쉬움',
        Low:       '낮음',
        Moderate:  '보통',
        Difficult: '어려움',
        High:      '높음',
      } as Record<string, string>,
      budgetStatus: {
        under: '예산 이내',
        near:  '예산 근접',
        over:  '예산 초과',
      },
    },

    /* ── Kit Overview ───────────────────────────────────────── */
    kitOverview: {
      selectedKit:    '선택한 키트',
      estimatedCost:  '예상 키트 비용',
      ofBudget:       (amt: string) => `£${amt} 예산 중`,
      remainingMsg:   (amt: string) => `£${amt} 남음 — 좌석 업그레이드 또는 페스툰 조명 추가를 고려해보세요.`,
      overMsg:        (amt: string) => `£${amt} 초과 — 먼저 가구 수량을 줄여보세요.`,
      installation:   '설치',
      maintenance:    '관리',
      zones:          '구역',
      areas:          '영역',
      spatialExp:     '공간 경험',
      whatsInKit:     '이 키트에 포함된 것들',
      products:       '제품',
      plantSpecies:   '식물 종',
      layoutZones:    '레이아웃 구역',
    },

    /* ── Design Rationale ───────────────────────────────────── */
    designRationale: {
      title:       '디자인 근거',
      subtitle:    '이 키트가 당신의 공간에 적합한 이유',
      collapseAll: '모두 접기',
      expandAll:   '모두 펼치기',
      rationaleLabels: [
        '이 제품 조합이 귀하의 환경에 적합한 이유',
        '이 공간 배치가 목표를 지원하는 이유',
        '관리 수준이 이렇게 책정된 이유',
        '설치 난이도가 이렇게 책정된 이유',
        '레이아웃이 이 공간 경험을 만드는 방법',
      ],
      keyInsight: '핵심 인사이트',
    },

    /* ── Design Summary ─────────────────────────────────────── */
    designSummary: {
      title:          '디자인 요약',
      regionTitle:    'UK 지역',
      installation:   '설치',
      maintenance:    '관리',
      materials:      '소재',
      pathType:       '동선 유형',
      focalElement:   '중심 요소',
      region:         '지역',
      climate:        '기후',
      plantSuitability: '식물 적합성',
    },

    /* ── Placement Guide ────────────────────────────────────── */
    placement: {
      title:       '배치 가이드',
      subtitle:    '각 제품의 위치와 그 이유',
      zonesBadge:  (n: number) => `${n}개 구역`,
      position:    '위치: ',
    },

    /* ── Shoppable Plan ─────────────────────────────────────── */
    shopping: {
      title:          '전체 쇼핑 리스트',
      subtitle:       (n: number) => `${n}개 항목 · 행을 클릭하면 배치 및 판매처 정보를 확인할 수 있습니다`,
      retailPartners: '판매 파트너',
      export:         '내보내기',
      allFilter:      (n: number) => `전체 (${n})`,
      placementInstallation: '배치 & 설치',
      hideRetailers:  '판매처 숨기기',
      whereToBuy:     '구매처',
      each:           '개당',
      totalCost:      '총 예상 비용',
      budgetLabel:    (amt: string) => `예산 £${amt}`,
      disclaimer:     '가격은 참고용입니다. 실제 비용은 판매처와 재고 상황에 따라 다를 수 있습니다. 구매 전 반드시 견적을 받아보세요.',
    },

    /* ── Style Library ──────────────────────────────────────── */
    styleLibrary: {
      title:      '스타일 라이브러리',
      subtitle:   '인기 가든 스타일 탐색',
      viewAll:    '전체 보기',
      noPreview:  '미리보기 없음',
      products:   (n: number) => `${n}개 제품`,
      switchNote: '언제든지 스타일을 변경할 수 있으며, 설정(예산, 관리 수준, 햇빛)은 유지됩니다.',
    },

    /* ── Preview Panel ──────────────────────────────────────── */
    preview: {
      title:          '시각 미리보기',
      subtitle:       '참고용 이미지 — 레이아웃이 주요 가이드입니다',
      regenerate:     '재생성',
      plan2d:         '2D 스케치 플랜',
      iso3d:          '3D 아이소메트릭 미리보기',
      viewFullSize:   '전체 크기로 보기',
      imgNotAdded:    '미리보기 이미지가 아직 추가되지 않았습니다',
      disclaimer:     '이 시각 자료는 참고용입니다. 정확한 제품 위치와 설치 방법은 위의 배치 가이드를 참조하세요.',
    },

    /* ── Chat Panel ─────────────────────────────────────────── */
    chat: {
      title:      '가든 플랜 수정하기',
      subtitle:   '제품, 배치, 스타일에 대해 질문하세요',
      emptyState: '설치 난이도, 관리, 제품 배치에 대해 질문하거나 스타일을 변경할 수 있습니다.',
      suggestions: [
        '설치가 얼마나 어렵나요?',
        '저관리 옵션을 원합니다',
        '음지 정원입니다',
        '더 프라이빗하게 만들어 주세요',
        '야외 식사 공간을 원합니다',
        '관리 수준을 설명해주세요',
      ],
      placeholder: '설치, 관리, 제품, 스타일 변경에 대해 질문해보세요...',
    },

  }, // end ko

  /* ══════════════════════════════════════════════════════════════
     BRITISH ENGLISH  (production)
  ══════════════════════════════════════════════════════════════ */
  enGB: {

    nav: {
      howItWorks:  'How it works',
      gardenPlans: 'Garden Plans',
      shop:        'Shop',
      plantGuide:  'Plant Guide',
      inspiration: 'Inspiration',
      aboutUs:     'About Us',
      login:       'Log in',
      getStarted:  'Get started',
    },

    hero: {
      headLine1:          'Your space.',
      headLine2:          'Your perfect',
      headLineAccent:     'garden plan.',
      sub:                'AI-powered garden plans using real UK products.',
      body:               "Tell us about your space and get a personalised shopping plan that's beautiful, practical, and easy to achieve.",
      ctaPrimary:         'Create My Garden Plan',
      ctaSecondary:       'See Example Plans',
      trust:              ['Real UK products', 'Personalised for your space', 'Easy to follow', 'Beginner friendly'],
      floatTitle:         'Designed for UK gardens',
      floatSub:           'Trusted by garden lovers',
      imgPlaceholderTitle:'Garden photo placeholder',
      imgPlaceholderSub:  'Add image to:',
    },

    howItWorks: {
      heading: 'How it works',
      steps: [
        'Tell us about your space',
        'AI creates your garden plan',
        'Review your shopping list',
        'Buy from trusted UK retailers',
      ],
      popularHeading: 'Popular plans',
      popularPlans:   ['Small Patio', 'Rented Balcony', 'North-facing Garden', 'Low Maintenance', 'Wildlife Friendly', 'Cottage Style'],
      featuredTitle:  'Small North-facing\nPatio Garden',
      featuredPrice:  'from £120',
      featuredTags:   'Low maintenance · Easy · Shade loving',
      featuredCta:    'View this plan',
      includedHeadingPre:  "What's",
      includedHeadingMid:  'included',
      includedHeadingPost: 'in your plan',
      includedItems: [
        'Custom garden layout & tips',
        'Plant & product recommendations',
        'Easy step-by-step guide',
        'Shopping list with budget',
        'Care guide for long-term success',
      ],
      retailersHeadingPre: 'Real products from',
      retailersHeadingMid: 'trusted UK retailers',
      retailersNote:       'Every product links directly to a trusted UK retailer. Buy with confidence from Crocus, Primrose, Thompson & Morgan, Sarah Raven and amazon.co.uk.',
      valueProps: [
        { title: 'Beginner friendly',     desc: 'Simple plans that anyone can follow.' },
        { title: 'Realistic & practical', desc: 'Plans that suit your space, time and budget.' },
        { title: 'Beautiful & sustainable', desc: "Create a garden you'll love for years to come." },
      ],
    },

    finalCta: {
      badge:        'Free to use · No account needed',
      headLine1:    'Your garden, designed',
      headLine2:    'in minutes.',
      body:         'Garden Vibe AI helps UK homeowners design beautiful outdoor spaces with confidence — without hiring a garden designer.',
      ctaPrimary:   'Start your free design',
      ctaSecondary: 'See example gardens',
      features:     ['8 garden styles', 'UK climate-matched plants', 'Instant shopping list', 'No signup required'],
      retailerNote: 'Real UK products sourced from Crocus, Thompson & Morgan, Primrose, Sarah Raven and more.',
    },

    builder: {
      back:       'Back',
      breadcrumb: 'Plan builder',
      tabs: {
        overview:  'Overview',
        placement: 'Placement Guide',
        shopping:  'Shopping List',
        preview:   'Visual Preview',
      },
    },

    settings: {
      title:    'Garden settings',
      subtitle: 'Your plan updates live',

      postcodeLabel: 'Postcode area',
      postcodeHint:  'Personalises plant picks for your region',

      spaceTypeLabel: 'Space type',
      spaceTypeLabels: {
        'Back garden': 'Back garden',
        'Front garden': 'Front garden',
        'Patio':        'Patio',
        'Courtyard':    'Courtyard',
        'Balcony':      'Balcony',
        'Side return':  'Side return',
      } as Record<string, string>,

      gardenStyleLabel: 'Garden style',
      gardenStyleLabels: {
        'cottage':          'Cottage Garden',
        'modern-courtyard': 'Modern Courtyard',
        'wildlife':         'Wildlife Garden',
        'mediterranean':    'Mediterranean Patio',
        'low-maintenance':  'Low-Maintenance Minimal',
        'naturalistic':     'Naturalistic Garden',
        'korean-zen':       'Korean Zen',
        'family-friendly':  'Family-Friendly Garden',
      } as Record<string, string>,

      maintenanceLabel: 'Maintenance level',
      maintenanceLabels: {
        Low:      'Low',
        Moderate: 'Moderate',
        High:     'High',
      } as Record<string, string>,

      sunlightLabel: 'Sunlight',
      sunlightLabels: {
        'Full sun':     'Full sun',
        'Part shade':   'Part shade',
        'Mostly shade': 'Mostly shade',
      } as Record<string, string>,
      sunlightHints: {
        'Full sun':     '6+ hours direct sun',
        'Part shade':   '3–6 hours direct sun',
        'Mostly shade': 'Under 3 hours direct sun',
      } as Record<string, string>,

      budgetLabel: 'Budget',
      budgetRange: '£500 – £10,000+',

      mainGoalLabel: 'Main goal',
      mainGoalLabels: {
        'Relaxing':          'Relaxing',
        'Outdoor Dining':    'Outdoor Dining',
        'Low Maintenance':   'Low Maintenance',
        'Curb Appeal':       'Curb Appeal',
        'Pet Friendly':      'Pet Friendly',
        'Wildlife Friendly': 'Wildlife Friendly',
        'Privacy':           'Privacy',
      } as Record<string, string>,

      updateBtn:  'Update design',
      updateNote: 'Your plan updates live as you change settings',
    },

    common: {
      difficultyLabels: {
        Easy:      'Easy',
        Low:       'Low',
        Moderate:  'Moderate',
        Difficult: 'Difficult',
        High:      'High',
      } as Record<string, string>,
      budgetStatus: {
        under: 'Under budget',
        near:  'Near budget',
        over:  'Over budget',
      },
    },

    kitOverview: {
      selectedKit:   'Your selected kit',
      estimatedCost: 'Estimated kit cost',
      ofBudget:      (amt: string) => `of £${amt} budget`,
      remainingMsg:  (amt: string) => `£${amt} remaining — consider upgrading seating or adding festoon lighting.`,
      overMsg:       (amt: string) => `£${amt} over budget — reduce quantities on furniture items first.`,
      installation:  'Installation',
      maintenance:   'Maintenance',
      zones:         'Zones',
      areas:         'areas',
      spatialExp:    'Spatial experience',
      whatsInKit:    "What's in this kit",
      products:      'products',
      plantSpecies:  'plant species',
      layoutZones:   'layout zones',
    },

    designRationale: {
      title:       'Design Rationale',
      subtitle:    'Why this kit works for your space',
      collapseAll: 'Collapse all',
      expandAll:   'Expand all',
      rationaleLabels: [
        'Why this product combination fits your conditions',
        'Why the spatial arrangement supports your goal',
        'Why maintenance is rated this level',
        'Why installation is rated this level',
        'How the layout creates this spatial experience',
      ],
      keyInsight: 'Key insight',
    },

    designSummary: {
      title:          'Design Summary',
      regionTitle:    'UK Region',
      installation:   'Installation',
      maintenance:    'Maintenance',
      materials:      'Materials',
      pathType:       'Path type',
      focalElement:   'Focal element',
      region:         'Region',
      climate:        'Climate',
      plantSuitability: 'Plant suitability',
    },

    placement: {
      title:      'Placement Guide',
      subtitle:   'Where each product goes and why',
      zonesBadge: (n: number) => `${n} zones`,
      position:   'Position: ',
    },

    shopping: {
      title:          'Full Shopping List',
      subtitle:       (n: number) => `${n} items · click any row for placement & retailer info`,
      retailPartners: 'Retail partners',
      export:         'Export',
      allFilter:      (n: number) => `All (${n})`,
      placementInstallation: 'Placement & Installation',
      hideRetailers:  'Hide retailers',
      whereToBuy:     'Where to buy',
      each:           'each',
      totalCost:      'Total estimated cost',
      budgetLabel:    (amt: string) => `Budget £${amt}`,
      disclaimer:     'Prices are indicative. Actual costs vary by retailer and availability. Always get a quote before purchasing.',
    },

    styleLibrary: {
      title:      'Style library',
      subtitle:   'Explore popular garden styles',
      viewAll:    'View all',
      noPreview:  'No preview',
      products:   (n: number) => `${n} products`,
      switchNote: 'You can switch styles at any time — your settings (budget, maintenance, sunlight) are preserved.',
    },

    preview: {
      title:        'Visual Preview',
      subtitle:     'Supporting reference — layout is the primary guide',
      regenerate:   'Regenerate',
      plan2d:       '2D Sketch Plan',
      iso3d:        '3D Isometric Preview',
      viewFullSize: 'View full size',
      imgNotAdded:  'Preview image not added yet',
      disclaimer:   'These visuals are illustrative references only. Refer to the Placement Guide above for exact product positions and installation instructions.',
    },

    chat: {
      title:      'Refine your garden plan',
      subtitle:   'Ask about any product, placement, or style',
      emptyState: 'Ask about installation difficulty, maintenance, product placement, or switch styles.',
      suggestions: [
        'How difficult is this to install?',
        'I want something low maintenance',
        'I have a shady garden',
        'Make it more private',
        'I want a dining area',
        'Explain the maintenance level',
      ],
      placeholder: 'Ask about installation, maintenance, products, or switch styles...',
    },

  }, // end enGB

}; // end locales

// ─────────────────────────────────────────────────────────────────────────────
// Export the active locale as `t`
// ─────────────────────────────────────────────────────────────────────────────

export const t = locales[LOCALE];
