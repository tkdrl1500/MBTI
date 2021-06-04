const questionList = [
  {
    q: "나는 말을 많이 하다 보니 실수 할 때가 종종 있다.",
    a: [
      { answer: "예", type: ["E"] },
      { answer: "아니오", type: ["I"] },
    ],
  },
  {
    q: "나는 말이 없어 주변 사람들이 답답해 할 때가 있다.",
    a: [
      { answer: "예", type: ["I"] },
      { answer: "아니오", type: ["E"] },
    ],
  },
  {
    q: "나는 새로운 사람을 만나면 기분이 좋아진다.",
    a: [
      { answer: "예", type: ["E"] },
      { answer: "아니오", type: ["I"] },
    ],
  },
  {
    q: "나는 모르는 사람을 만나는 일은 피곤하다.",
    a: [
      { answer: "예", type: ["I"] },
      { answer: "아니오", type: ["E"] },
    ],
  },
  {
    q: "어떤 일에 대해 말하는 도중에 생각하고 대화도중 결심할 때가 있다.",
    a: [
      { answer: "예", type: ["E"] },
      { answer: "아니오", type: ["I"] },
    ],
  },
  {
    q: "어떤 일에 대해 의견을 말하기에 앞서 신중히 생각하는 편이다.",
    a: [
      { answer: "예", type: ["I"] },
      { answer: "아니오", type: ["E"] },
    ],
  },
  {
    q: "나는 팀으로 일 하는 것이 편하다.",
    a: [
      { answer: "예", type: ["E"] },
      { answer: "아니오", type: ["I"] },
    ],
  },
  {
    q: "나는 혼자 혹은 다른 사람 한 명 정도와 일 하는 것이 편하다.",
    a: [
      { answer: "예", type: ["I"] },
      { answer: "아니오", type: ["E"] },
    ],
  },
  {
    q: "나는 생각이나 견해를 사람들에게 표현하기를 좋아한다.",
    a: [
      { answer: "예", type: ["E"] },
      { answer: "아니오", type: ["I"] },
    ],
  },
  {
    q: "나는 대체로 나의 삶, 생각, 견해를 내 안에 간직하는 편이다.",
    a: [
      { answer: "예", type: ["I"] },
      { answer: "아니오", type: ["E"] },
    ],
  },
  {
    q: "회의나 모임이 끝나면 말을 너무 많이 한 것 같다고 후회할 때가 있다.",
    a: [
      { answer: "예", type: ["E"] },
      { answer: "아니오", type: ["I"] },
    ],
  },
  {
    q: "회합이나 모임이 끝나고 나면 나의 생각을 이야기하지 않은 것을 후회할 때가 있다.",
    a: [
      { answer: "예", type: ["I"] },
      { answer: "아니오", type: ["E"] },
    ],
  },
  {
    q: "오랜 시간 혼자 일하다 보면 외롭고 지루하고 힘들다.",
    a: [
      { answer: "예", type: ["E"] },
      { answer: "아니오", type: ["I"] },
    ],
  },
  {
    q: "혼자 오랜 시간 일해도 외롭거나 지루하지 않다.",
    a: [
      { answer: "예", type: ["I"] },
      { answer: "아니오", type: ["E"] },
    ],
  },
  {
    q: "일할 때 적막한 것보다는 어느 정도의 소리가 자극이 되기도 한다.",
    a: [
      { answer: "예", type: ["E"] },
      { answer: "아니오", type: ["I"] },
    ],
  },
  {
    q: "나는 시끄러운 환경에서 일을 제대로 할 수 없다.",
    a: [
      { answer: "예", type: ["I"] },
      { answer: "아니오", type: ["E"] },
    ],
  },
  {
    q: "말이 빠르고 목소리가 큰 편에 속한다.",
    a: [
      { answer: "예", type: ["E"] },
      { answer: "아니오", type: ["I"] },
    ],
  },
  {
    q: "목소리가 작고 조용하게 말한다.",
    a: [
      { answer: "예", type: ["I"] },
      { answer: "아니오", type: ["E"] },
    ],
  },
  {
    q: "나는 활동적인 편이다",
    a: [
      { answer: "예", type: ["E"] },
      { answer: "아니오", type: ["I"] },
    ],
  },
  {
    q: "나는 집에 있는 것이 편하다.",
    a: [
      { answer: "예", type: ["I"] },
      { answer: "아니오", type: ["E"] },
    ],
  },
  {
    q: "나는 현실적이다.",
    a: [
      { answer: "예", type: ["S"] },
      { answer: "아니오", type: ["N"] },
    ],
  },
  {
    q: "나는 미래지향적이다.",
    a: [
      { answer: "예", type: ["N"] },
      { answer: "아니오", type: ["S"] },
    ],
  },
  {
    q: "나는 과거의 경험으로 판단한다.",
    a: [
      { answer: "예", type: ["S"] },
      { answer: "아니오", type: ["N"] },
    ],
  },
  {
    q: "나는 미래의 가능성으로 판단한다.",
    a: [
      { answer: "예", type: ["N"] },
      { answer: "아니오", type: ["S"] },
    ],
  },
  {
    q: "나는 사실적 표현을 잘한다.",
    a: [
      { answer: "예", type: ["S"] },
      { answer: "아니오", type: ["N"] },
    ],
  },
  {
    q: "나는 추상적 표현을 잘 한다.",
    a: [
      { answer: "예", type: ["N"] },
      { answer: "아니오", type: ["S"] },
    ],
  },
  {
    q: "나는 구체적이다.",
    a: [
      { answer: "예", type: ["S"] },
      { answer: "아니오", type: ["N"] },
    ],
  },
  {
    q: "나는 은유적이다.",
    a: [
      { answer: "예", type: ["N"] },
      { answer: "아니오", type: ["S"] },
    ],
  },
  {
    q: "나는 상식적이다.",
    a: [
      { answer: "예", type: ["S"] },
      { answer: "아니오", type: ["N"] },
    ],
  },
  {
    q: "나는 창의적이다.",
    a: [
      { answer: "예", type: ["N"] },
      { answer: "아니오", type: ["S"] },
    ],
  },
  {
    q: "나는 갔던 길로 가는 것이 편하다.",
    a: [
      { answer: "예", type: ["S"] },
      { answer: "아니오", type: ["N"] },
    ],
  },
  {
    q: "나는 새로운 길이 재미있다.",
    a: [
      { answer: "예", type: ["N"] },
      { answer: "아니오", type: ["S"] },
    ],
  },
  {
    q: "나는 집안 일을 잘 할 줄 아는 편이다.",
    a: [
      { answer: "예", type: ["S"] },
      { answer: "아니오", type: ["N"] },
    ],
  },
  {
    q: "나는 집안 일이 서투르다.",
    a: [
      { answer: "예", type: ["N"] },
      { answer: "아니오", type: ["S"] },
    ],
  },
  {
    q: "나는 한 번 간 길도 잘 기억하는 편이다.",
    a: [
      { answer: "예", type: ["S"] },
      { answer: "아니오", type: ["N"] },
    ],
  },
  {
    q: "나는 한 번 간 길은 잘 기억하지 못하는 편이다.",
    a: [
      { answer: "예", type: ["N"] },
      { answer: "아니오", type: ["S"] },
    ],
  },
  {
    q: "나는 실제 경험을 좋아한다.",
    a: [
      { answer: "예", type: ["S"] },
      { answer: "아니오", type: ["N"] },
    ],
  },
  {
    q: "나는 공상을 좋아한다.",
    a: [
      { answer: "예", type: ["N"] },
      { answer: "아니오", type: ["S"] },
    ],
  },
  {
    q: "나는 침착한 편이다.",
    a: [
      { answer: "예", type: ["S"] },
      { answer: "아니오", type: ["N"] },
    ],
  },
  {
    q: "나는 비약한다.",
    a: [
      { answer: "예", type: ["N"] },
      { answer: "아니오", type: ["S"] },
    ],
  },

  {
    q: "나는 분석적이다.",
    a: [
      { answer: "예", type: ["T"] },
      { answer: "아니오", type: ["F"] },
    ],
  },

  {
    q: "나는 감수성이 풍부하다.",
    a: [
      { answer: "예", type: ["F"] },
      { answer: "아니오", type: ["T"] },
    ],
  },

  {
    q: "나는 객관적이다.",
    a: [
      { answer: "예", type: ["T"] },
      { answer: "아니오", type: ["F"] },
    ],
  },
  {
    q: "나는 공감적이다.",
    a: [
      { answer: "예", type: ["F"] },
      { answer: "아니오", type: ["T"] },
    ],
  },

  {
    q: "나는 감정에 치우치지 않고 의사 결정을 한다.",
    a: [
      { answer: "예", type: ["T"] },
      { answer: "아니오", type: ["F"] },
    ],
  },
  {
    q: "나는 상황을 생각하며 의사결정을 한다.",
    a: [
      { answer: "예", type: ["F"] },
      { answer: "아니오", type: ["T"] },
    ],
  },
  {
    q: "나는 이성과 논리로 행동한다.",
    a: [
      { answer: "예", type: ["T"] },
      { answer: "아니오", type: ["F"] },
    ],
  },
  {
    q: "나는 가치관과 느낌으로 행동한다.",
    a: [
      { answer: "예", type: ["F"] },
      { answer: "아니오", type: ["T"] },
    ],
  },

  {
    q: "나는 능력있단 소리를 듣기 좋아한다.",
    a: [
      { answer: "예", type: ["T"] },
      { answer: "아니오", type: ["F"] },
    ],
  },

  {
    q: "나는 따뜻하단 소리를 듣기 좋아한다.",
    a: [
      { answer: "예", type: ["F"] },
      { answer: "아니오", type: ["T"] },
    ],
  },

  {
    q: "나는 경쟁한다.",
    a: [
      { answer: "예", type: ["T"] },
      { answer: "아니오", type: ["F"] },
    ],
  },

  {
    q: "나는 양보한다.",
    a: [
      { answer: "예", type: ["F"] },
      { answer: "아니오", type: ["T"] },
    ],
  },
  {
    q: "나는 직선적인 말이 편하다.",
    a: [
      { answer: "예", type: ["T"] },
      { answer: "아니오", type: ["F"] },
    ],
  },
  {
    q: "나는 배려하는 말이 편하다.",
    a: [
      { answer: "예", type: ["F"] },
      { answer: "아니오", type: ["T"] },
    ],
  },
  {
    q: "나는 사건의 원인과 결과를 쉽게 파악한다.",
    a: [
      { answer: "예", type: ["T"] },
      { answer: "아니오", type: ["F"] },
    ],
  },
  {
    q: "나는 사람의 기분을 쉽게 파악한다.",
    a: [
      { answer: "예", type: ["F"] },
      { answer: "아니오", type: ["T"] },
    ],
  },
  {
    q: "사람들은 나를 차갑다고 하는 편이다.",
    a: [
      { answer: "예", type: ["T"] },
      { answer: "아니오", type: ["F"] },
    ],
  },
  {
    q: "사람들은 나를 따뜻하다고 하는 편이다.",
    a: [
      { answer: "예", type: ["F"] },
      { answer: "아니오", type: ["T"] },
    ],
  },
  {
    q: "나는 할 말은 한다.",
    a: [
      { answer: "예", type: ["T"] },
      { answer: "아니오", type: ["F"] },
    ],
  },
  {
    q: "나는 좋게 생각하는 편이다.",
    a: [
      { answer: "예", type: ["F"] },
      { answer: "아니오", type: ["T"] },
    ],
  },

  {
    q: "나는 결정에 대해 잘 변경하지 않는다.",
    a: [
      { answer: "예", type: ["J"] },
      { answer: "아니오", type: ["P"] },
    ],
  },
  {
    q: "나는 결정에 대해 융통성이 있는 편이다.",
    a: [
      { answer: "예", type: ["P"] },
      { answer: "아니오", type: ["J"] },
    ],
  },
  {
    q: "나는 계획에 의해서 일 처리를 하는 편이다.",
    a: [
      { answer: "예", type: ["J"] },
      { answer: "아니오", type: ["P"] },
    ],
  },
  {
    q: "나는 일 처리를 마지막에 벼락치기로 하는 편이다.",
    a: [
      { answer: "예", type: ["P"] },
      { answer: "아니오", type: ["J"] },
    ],
  },
  {
    q: "나는 계획된 여행이 편하다.",
    a: [
      { answer: "예", type: ["J"] },
      { answer: "아니오", type: ["P"] },
    ],
  },
  {
    q: "나는 갑자기 떠다는 여행이 재밌다.",
    a: [
      { answer: "예", type: ["P"] },
      { answer: "아니오", type: ["J"] },
    ],
  },
  {
    q: "나는 팀으로 일하는 것이 편하다.",
    a: [
      { answer: "예", type: ["J"] },
      { answer: "아니오", type: ["P"] },
    ],
  },
  {
    q: "나는 혼자서 일하는 것이 편하다.",
    a: [
      { answer: "예", type: ["P"] },
      { answer: "아니오", type: ["J"] },
    ],
  },
  {
    q: "나는 입장이나 결정에 대해 명확하게 언급하는 것을 좋아한다.",
    a: [
      { answer: "예", type: ["J"] },
      { answer: "아니오", type: ["P"] },
    ],
  },
  {
    q: "나는 변화의 가능성을 생각하면서 자신의 입장을 임시적인 것으로 간주한다.",
    a: [
      { answer: "예", type: ["P"] },
      { answer: "아니오", type: ["J"] },
    ],
  },
  {
    q: "나는 조직적인 분위기에서 일이 잘 된다.",
    a: [
      { answer: "예", type: ["J"] },
      { answer: "아니오", type: ["P"] },
    ],
  },
  {
    q: "나는 즐거운 분위기에서 일이 잘 된다.",
    a: [
      { answer: "예", type: ["P"] },
      { answer: "아니오", type: ["J"] },
    ],
  },
  {
    q: "나는 계획적이고 조직적이다.",
    a: [
      { answer: "예", type: ["J"] },
      { answer: "아니오", type: ["P"] },
    ],
  },
  {
    q: "나는 순발력이 있다.",
    a: [
      { answer: "예", type: ["P"] },
      { answer: "아니오", type: ["J"] },
    ],
  },
  {
    q: "나는 규범을 좋아한다.",
    a: [
      { answer: "예", type: ["J"] },
      { answer: "아니오", type: ["P"] },
    ],
  },
  {
    q: "나는 자유로운 것을 좋아한다.",
    a: [
      { answer: "예", type: ["P"] },
      { answer: "아니오", type: ["J"] },
    ],
  },
  {
    q: "나는 일 할때 친해진다.",
    a: [
      { answer: "예", type: ["J"] },
      { answer: "아니오", type: ["P"] },
    ],
  },
  {
    q: "나는 놀 때 친해진다.",
    a: [
      { answer: "예", type: ["P"] },
      { answer: "아니오", type: ["J"] },
    ],
  },
  {
    q: "내 책상은 정리가 잘 되어있다.",
    a: [
      { answer: "예", type: ["J"] },
      { answer: "아니오", type: ["P"] },
    ],
  },
  {
    q: "내 책상은 이것저것 벌려져있다.",
    a: [
      { answer: "예", type: ["P"] },
      { answer: "아니오", type: ["J"] },
    ],
  },
];
