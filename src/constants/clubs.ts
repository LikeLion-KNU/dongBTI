interface Club {
    name: string;
    summary: string;
    description: string | null;
    department: "literature" | "social" | "religious" | "physical" | "academic";
}

const clubs: Club[] = [
    {
        name: "경묵회",
        summary: "50주년을 맞이한 경북대학교 서예동아리",
        description: "일상에서 서예의 고요한 정취를 느껴보세요",
        department: "literature",
    },
    {
        name: "그랜드챕스",
        summary: "즐거움 가득한 중앙밴드동아리",
        description: "신입생, 재학생, 음악을 처음 하는 사람 모두 상관없어요~ 밴드 음악 러버 모두 컴온",
        department: "literature",
    },
    {
        name: "관현악반",
        summary: "무료한 삶에 클래식을 곁들여보세요.",
        description: "악기 입문부터 감상, 연주까지! ALL IN 1, KNUAO.",
        department: "literature",
    },
    {
        name: "KOMO",
        summary: "영화를 사랑하는 모든 사람들과 영화 같은 순간들을 함께 만들어가는 경북대 유일 영화 감상 동아리",
        description: null,
        department: "literature",
    },
    {
        name: "꿈틀",
        summary: "경북대학교 유일무이 영상 창작 동아리!",
        description: "꿈틀과 함께 무궁무진한 영상의 세계에 함께해 보세요!",
        department: "literature",
    },
    {
        name: "농악반",
        summary: "진정한 '국.힙'을 원한다면, 농악반으로.",
        description: "농악의 세계에 빠질 46대를 모집합니다.",
        department: "literature",
    },
    {
        name: "뜨람",
        summary: "손으로 만드는건 무엇이든!",
        description: "수공예 동아리 뜨람과 함께 추억을 만들어가요~",
        department: "literature",
    },
    {
        name: "사우회",
        summary: "순간을 멈추고 추억을 새롭게 탄생시키는 곳입니다.",
        description: "함께한 순간들을 사진으로 남겨보세요.",
        department: "literature",
    },
    {
        name: "쌩목",
        summary: "센스도 철철 넘치지, 노래는 예술의 경지!",
        description: "Welcome to the land of 쌩목",
        department: "literature",
    },
    {
        name: "연극반",
        summary: "연극에 관심 있는 누구나, 또 다른 나를 찾고 싶은 누구나, 연극반과 함께해요!",
        description: null,
        department: "literature",
    },
    {
        name: "요리조리",
        summary: "요리의 숨겨진 매력을 요리조리 찾아 맛있는 시간을 가지는 동아리",
        description: null,
        department: "literature",
    },
    {
        name: "우리노래반",
        summary: "UNB, We are unbound! 다양한 장르의 음악을 얽매이지 않고 자유롭게, ",
        description: "우리가 즐거운 음악을 하는 중앙동아리 우리노래반입니다!",
        department: "literature",
    },
    {
        name: "익스프레션",
        summary: "경북대학교 유일 작사작곡 동아리 익스프레션입니다!",
        description: null,
        department: "literature",
    },
    {
        name: "일렉스",
        summary: "무대 위에서 공연하며 스포트라이트 받고 싶은 사람 일렉스로 오세요!",
        description: "음악을 향한 열정만 있다면 악기를 처음 쳐봐도 처음부터 다 가르쳐드립니다!!",
        department: "literature",
    },
    {
        name: "청음반",
        summary: "설레는 봄, 새학기의 낭만을 가득 채울 어쿠스틱 기타 동아리",
        description: null,
        department: "literature",
    },
    {
        name: "크누피",
        summary: "우리, 피아노에 '미'쳐볼까?",
        description: "피아노 동아리",
        department: "literature",
    },
    {
        name: "터프시커리",
        summary: "유튜브 30만 구독자를 보유한 경북대 유일무이 중앙 댄스동아리 터프시커리",
        description: null,
        department: "literature",
    },
    {
        name: "토레스",
        summary: "50년 전통의 아름다운 선율이 울리는 클래식 기타 동아리 토레스!",
        description: null,
        department: "literature",
    },
    {
        name: "POW",
        summary: "자작곡 작업, 공연, 디제잉, 파티, 힙합 관련 콘텐츠는 경북대 유일무이 힙합 동아리 POW에서.",
        description: "힙합을 좋아하는 모든 분들을 환영합니다!",
        department: "literature",
    },
    {
        name: "팔레트",
        summary: "'나'라는 도화지에 그려가는 '우리'라는 그림",
        description: "종합예술동아리 팔레트",
        department: "literature",
    },
    {
        name: "플레이아데스",
        summary: "메탈밴드 동아리 플레이아데스입니다!!",
        description:
            "메탈뿐만 아니라 다양한 국가의 록 음악을 연주하고 연구합니다! 음악을 사랑하는 여러분을 환영합니다 :)",
        department: "literature",
    },
    {
        name: "합창단",
        summary: "노래로 하나되는, 하모니로 마음을 울리는, 경북대학교 합창단",
        description: null,
        department: "literature",
    },
    {
        name: "RCY",
        summary: "봉사하면 RCY! RCY하면 봉사!",
        description: "전국 RCY 대학생을 만날 수 있는 유일무이 봉사 동아리",
        department: "social",
    },
    {
        name: "SLANG",
        summary: "Connecting the World, One Word at a Time. We Embrace Diversity!",
        description: "국제교류 동아리 SLANG입니다!",
        department: "social",
    },
    {
        name: "미담장학회",
        summary: "다양한 교육봉사활동을 설계하고 실제로 진행하는 동아리입니다.",
        description: null,
        department: "social",
    },
    {
        name: "상투스",
        summary: "다양한 사람들과의 재미있고 특색있는 벽화 그리기!",
        description: "경대 유일 벽화 봉사 동아리",
        department: "social",
    },
    {
        name: "수리영역",
        summary: "수리수리 마수리!",
        description: "교내외 보수가 필요한 시설을 수리하는 동아리",
        department: "social",
    },
    {
        name: "신망애",
        summary: "아이들과 함께하는 뿌듯한 멘토링과 알찬 체험활동!",
        description: "마음이 따뜻해지는 교육봉사 동아리 신망애로 오세요!",
        department: "social",
    },
    {
        name: "한울회",
        summary: "아람단 단원들과 함께하는 대학 연합 봉사 동아리",
        description: null,
        department: "social",
    },
    {
        name: "경불회",
        summary: "나이, 성별, 종교 무관! 누구나 함께하며 삶의 고통을 나누고 행복을 탐구하는",
        description: "교내 유일의 불교 동아리입니다!",
        department: "religious",
    },
    {
        name: "DFC",
        summary: "하나 되어! 더불어! 땅끝까지! 제자들 선교회!",
        description: "단란한 기독교 동아리입니다~",
        department: "religious",
    },
    {
        name: "빨마",
        summary: "천주교 동아리 빨마에서 재밌게 친목을 다지며 신앙생활 하실 분들 모집합니다!",
        description: null,
        department: "religious",
    },
    {
        name: "SFC",
        summary: "바른 신학을 배워 바른 신앙을 가지고 바른 생활을 나아간다",
        description: null,
        department: "religious",
    },
    {
        name: "IVF",
        summary: "캠퍼스 속의 하나님의 나라",
        description: "IVF",
        department: "religious",
    },
    {
        name: "스매싱",
        summary: "스트레스를 날려버릴 smashing한 시간!",
        description: "경북대 탁구동아리 스매싱에서 함께 즐겨요~",
        department: "physical",
    },
    {
        name: "스윙스",
        summary: "남녀노소 누구나 불태울 수 있는 최강의 스포츠 배드민턴!",
        description: null,
        department: "physical",
    },
    {
        name: "스트라이크",
        summary: "전국 최강의 왕조를 함께할 여러분을 맞이합니다.",
        description: "전국 최강 야구동아리, Strike!",
        department: "physical",
    },
    {
        name: "스파이크",
        summary: "스포츠의 짜릿함, 파워풀한 한방!",
        description: "이곳에서 크게 펼쳐지는 스파이크의 열정!",
        department: "physical",
    },
    {
        name: "싸울아비",
        summary: "조선시대 무기를 직접 휘두르는",
        description: "경북대 유일 병장기 동아리",
        department: "physical",
    },
    {
        name: "업어치기",
        summary: "운동과 학교생활을 둘 다 잡을 수 있는",
        description: "경북대학교 유일무이 유도 동아리",
        department: "physical",
    },
    {
        name: "에이밍",
        summary: '"텐텐텐!" 활도 쏘고 친목도 다질 수 있는',
        description: "경북대 유일한 양궁동아리",
        department: "physical",
    },
    {
        name: "파란",
        summary: "볼을 차면서 스트레스도 풀고!",
        description: "잘생긴 선후배들과 친해질 수 있는 유일무이 족구 동아리",
        department: "physical",
    },
    {
        name: "검도부",
        summary: "머리! 손목! 허리! 타격감 넘치는",
        description: "경북대 유일 검도 동아리",
        department: "physical",
    },
    {
        name: "기파랑",
        summary: "태권도를 처음 하는 분들부터 대회 참가를 목표로 하는 분들까지",
        description: "어울려서 재미있게 훈련합시다!",
        department: "physical",
    },
    {
        name: "동그라미",
        summary: "농구를 재밌고 파이팅 있게 즐기고 싶은 분들은 동그라미로!",
        description: null,
        department: "physical",
    },
    {
        name: "맨투맨",
        summary: "패션동아리 아닙니다.",
        description: "농구동아리 맞습니다.",
        department: "physical",
    },
    {
        name: "산악부",
        summary: "건강도 낭만도 재미도 챙기는",
        description: "경북대 유일무이 산악부",
        department: "physical",
    },
    {
        name: "KGA",
        summary: "20대때 배워놓은 골프,",
        description: "여든까지 간다",
        department: "physical",
    },
    {
        name: "서브미션",
        summary: "브라질에서 온 무술이자 '몸으로 하는 체스!'라고 불리는",
        description: "경북대 주짓수 동아리",
        department: "physical",
    },
    {
        name: "센토",
        summary: "교내 유일한 축구 중앙동아리!",
        description: "축구를 사랑하고 즐기고 싶은 학생 여러분 모두 환영합니다!",
        department: "physical",
    },
    {
        name: "수중탐사대",
        summary: "더 넓고, 더 깊은 바다로",
        description: null,
        department: "physical",
    },
    {
        name: "오렌지 파이터스",
        summary: "대구경북 최고의 미식축구 팀!",
        description: null,
        department: "physical",
    },
    {
        name: "IZB(인질범)",
        summary: "한 번 타면 영원히 질주해요.",
        description: "앉을 시간이 없! 어! 요!",
        department: "physical",
    },
    {
        name: "KNUBC",
        summary: "볼링과 뒤풀이에 진심인 동아리",
        description: "KNUBC로 오세요!!",
        department: "physical",
    },
    {
        name: "KUTC",
        summary: "테니스공 하나로",
        description: "스트레스 날리는 동아리",
        department: "physical",
    },
    {
        name: "크누 모빌리티",
        summary: "다양한 전공이 모여",
        description: "미래모빌리티를 탐구, 연구하는 학술 동아리",
        department: "academic",
    },
    {
        name: "KNU UNSA",
        summary: "국내 최대규모 국제기구 연합 동아리이자 외교부에 등록된",
        description: "유엔한국협회 공식 산하 단체 UNSA",
        department: "academic",
    },
    {
        name: "트러블메이커",
        summary: "끝이 없는 보드게임의 세계,",
        description: "트러블메이커로 오세요!",
        department: "academic",
    },
    {
        name: "현시연",
        summary: "서브컬처를 탐구하고 창작하는",
        description: "현시연에 어서오세요!",
        department: "academic",
    },
    {
        name: "국사무쌍",
        summary: "지구상에서 가장 재미있는 매너와 존중의 멘탈 스포츠,",
        description: "리치마작의 세계로 여러분을 초대합니다!",
        department: "academic",
    },
    {
        name: "Now&Here",
        summary: "우리가 있는 지금 이 곳 경북대에서 미래를 만들자",
        description: "경북대 진로설계 동아리",
        department: "academic",
    },
    {
        name: "돌구름",
        summary: "우리들의 상상이 현실이 되는 돌구름!",
        description: "기회의 동아리로 여러분들 초대합니다 ☺",
        department: "academic",
    },
    {
        name: "VINE",
        summary: "경북대 유일 영어 회화 동아리",
        description: "VINE",
        department: "academic",
    },
    {
        name: "복현기우회",
        summary: "머리는 차갑게, 마음은 뜨겁게!",
        description: "냉철한 판단과 열정이 만나는 곳, 복현기우회",
        department: "academic",
    },
    {
        name: "솔라이브",
        summary: "창업가들의 동아리",
        description: "솔라이브입니다.",
        department: "academic",
    },
    {
        name: "솔토론회",
        summary: "세상 모든 이야기, 솔토론회",
        description: null,
        department: "academic",
    },
    {
        name: "앱동",
        summary: "앱이 없으면 만들어 쓰자!",
        description: "프로그래밍 교육 & 개발 동아리 앱동",
        department: "academic",
    },
    {
        name: "에이스",
        summary: "경제 시사 발표 및 토의 동아리",
        description: "ACE(About Current Economy)입니다.",
        department: "academic",
    },
    {
        name: "H.P",
        summary: "펌프, 환영합니다, 리듬 오락",
        description: null,
        department: "academic",
    },
    {
        name: "H.Q",
        summary: "서양사와 동양사를 함께 아울러 공부하고 다양한 동아리 프로그램을 통해",
        description: "역사를 탐구하고 인문학적 소양을 기르는 동아리입니다.",
        department: "academic",
    },
    {
        name: "코스모스",
        summary: "별을 좋아하는 사람들이 모여",
        description: "함께 밤하늘을 바라보며 추억을 쌓는 동아리",
        department: "academic",
    },
];

export default clubs;
