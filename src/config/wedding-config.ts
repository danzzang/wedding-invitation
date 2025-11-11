const uniqueIdentifier = "JWK-WEDDING-TEMPLATE-V1";

// 갤러리 레이아웃 타입 정의
type GalleryLayout = "scroll" | "grid";
type GalleryPosition = "middle" | "bottom";

interface GalleryConfig {
  layout: GalleryLayout;
  position: GalleryPosition;
  images: string[];
}

export const weddingConfig = {
  // 메타 정보
  meta: {
    title: "김경현 ❤️ 이다인의 Wedding Invitation",
    description: "결혼식 초대장",
    ogImage: "/images/8.jpeg",
    noIndex: true,
    _jwk_watermark_id: uniqueIdentifier,
  },

  // 메인 화면
  main: {
    title: "Wedding Invitation",
    image: "/images/1.jpeg",
    date: "2026년 3월 22일 일요일 13시 40분",
    venue: "선릉 상록아트홀 - 그랜드볼룸홀 (L층)"
  },

  // 소개글
  intro: {
    title: "",
    text: "서로를 바라보며 걸어온\n소중한 발걸음이\n이제 하나의 길로 이어집니다.\n\n사랑과 믿음으로\n새 가정을 이루는 저희 두 사람의\n작은 시작을 알려드립니다."
  },

  // 결혼식 일정
  date: {
    year: 2026,
    month: 3,
    day: 22,
    hour: 13,
    minute: 40,
    displayDate: "2026.03.22 SUN PM 13:40",
  },

  // 장소 정보
  venue: {
    name: "상록아트홀 - 그랜드볼룸홀 (L층)",
    address: "서울 강남구 언주로 508 상록회관\n상록아트홀",
    tel: "02-564-5757",
    naverMapId: "상록아트홀", // 네이버 지도 검색용 장소명
    coordinates: {
      latitude: 37.503985,
      longitude: 127.042815,
    },
    placeId: "366784007", // 네이버 지도 장소 ID
    mapZoom: "15.00", // 지도 줌 레벨
    mapNaverCoordinates: "14141300,4507203,15,0,0,0,dh", // 네이버 지도 길찾기 URL용 좌표 파라미터 (구 형식)
    transportation: {
      subway: "- 지하철 2호선, 수인분당선 선릉역 5번 출구 580m \n - 지하철 2호선 역삼역 8번 출구 640m\n - 선릉역 5번 출구 앞 셔틀버스 운행",
    },
    parking: "건물 내 주차장 이용 가능 (1시간 30분 무료)",
    // 신랑측 배차 안내
    groomShuttle: {
      location: "신랑측 배차 출발지",
      departureTime: "오전 10시 30분 출발",
      contact: {
        name: "담당자명",
        tel: "010-1234-5678"
      }
    },
    // 신부측 배차 안내
    brideShuttle: {
      location: "신부측 배차 출발지",
      departureTime: "오전 11시 출발",
      contact: {
        name: "담당자명",
        tel: "010-9876-5432"
      }
    }
  },

  // 갤러리
  gallery: {
    layout: "grid" as GalleryLayout, // "scroll" 또는 "grid" 선택
    position: "middle" as GalleryPosition, // "middle" (현재 위치) 또는 "bottom" (맨 하단) 선택
    images: [
      "/images/gallery/1.jpeg",
      "/images/gallery/2.jpeg",
      "/images/gallery/3.jpeg",
      "/images/gallery/4.jpeg",
      "/images/gallery/5.jpeg",
      "/images/gallery/6.jpeg",
      "/images/gallery/7.jpeg",
      "/images/gallery/8.jpeg",
      "/images/gallery/8-1.jpeg",
      "/images/gallery/9.jpeg",
      "/images/gallery/10.jpeg",
      "/images/gallery/11.jpeg",
      "/images/gallery/12.jpeg",
      "/images/gallery/13.jpeg",
      "/images/gallery/14.jpeg",
      "/images/gallery/15.jpeg",
      "/images/gallery/15-1.jpeg",
      "/images/gallery/16.jpeg",
      "/images/gallery/17.jpeg",
      "/images/gallery/18.jpeg",
      "/images/gallery/19.jpeg",
      "/images/gallery/20.jpeg",
    ],
  } as GalleryConfig,

  // 초대의 말씀
  invitation: {
    message: "스물셋, 스물하나였던\n경현이와 다인이가\n예쁘고 찬란하게 사랑한 순간들이 쌓여\n지금의 우리가 되었습니다.\n\n 그리고 함께 맞이하는 아홉번째 봄,\n앞으로의 모든 계절에도\n서로의 곁에서 함께하기를 약속합니다.\n따뜻한 마음으로 축하해주시면 감사하겠습니다.",
    groom: {
      name: "김경현",
      label: "아들",
      father: "김진만",
      mother: "정미영",
    },
    bride: {
      name: "이다인",
      label: "딸",
      father: "이영선",
      mother: "한상의",
    },
  },

  // 계좌번호
  account: {
    groom: {
      bank: "국민은행",
      number: "86640104170101",
      holder: "김경현",
    },
    bride: {
      bank: "신한은행",
      number: "110452833771",
      holder: "이다인",
    },
    groomFather: {
      bank: "신한은행",
      number: "90504130608",
      holder: "김진만",
    },
    groomMother: {
      bank: "신한은행",
      number: "22302251256",
      holder: "정미영",
    },
    brideFather: {
      bank: "농협은행",
      number: "45303652222832",
      holder: "이영선",
    },
    brideMother: {
      bank: "국민은행",
      number: "72210101395783",
      holder: "한상의",
    }
  },

  // RSVP 설정
  rsvp: {
    enabled: false, // RSVP 섹션 표시 여부
    showMealOption: false, // 식사 여부 입력 옵션 표시 여부
  },

  // 슬랙 알림 설정
  // slack: {
  //   webhookUrl: process.env.NEXT_PUBLIC_SLACK_WEBHOOK_URL || "",
  //   channel: "#wedding-response",
  //   compactMessage: true, // 슬랙 메시지를 간결하게 표시
  // },
}; 
