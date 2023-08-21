<script setup>
import { ref, computed, onMounted, onBeforeMount } from 'vue'

const handleScroll = () => {
  var mission = document.querySelector('.mission')
  var principles = document.querySelector('.principles')

  if (mission && principles) {
    var missionPosition = mission.getBoundingClientRect().top
    var principlesPosition = principles.getBoundingClientRect().top
    var windowHeight = window.innerHeight

    if (missionPosition < windowHeight) {
      mission.style.transform = 'translateX(0)'
      setTimeout(() => {
        mission.style.opacity = '1'
      }, 200)
    }
    if (principlesPosition < windowHeight) {
      principles.style.transform = 'translateX(0)'
      setTimeout(() => {
        principles.style.opacity = '1'
      }, 200)
    }
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  var project = document.querySelector('.project')
  if (project) {
    project.style.transform = 'translateX(0)'
    project.style.opacity = '1'
  }
})

onBeforeMount(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
<template>
  <div class="container">
    <div class="project" ref="projectRef">
      <h1>О проекте</h1>
      <div class="info">
        <div class="text">
          <p>
            «Открытый университет РГППУ» – это новый проект Центра развития образовательных проектов Университета.
            Проект реализуется в рамках «третьей миссии университета», понимаемой в академическом сообществе как вклад
            университета в социальное, культурно-просветительское и научно- образовательное развитие общества. Ядром
            проекта «Открытый университет РГППУ» является модель неформального образования взрослых.
          </p>
          <p>
            Исторически университеты в нашей стране, как и в других европейских странах, во все времена решали задачи не
            только профессиональной подготовки студентов, развития образования и науки, но выступали и в качестве
            центров культуры, просвещения в своих регионах. «Открытый университет РГППУ» создан для выполнения этой
            важной миссии на неформальной основе. Удовлетворение потребностей населения в повышении образовательного и
            культурного уровня в рамках образовательного проекта, безусловно, положительно отразится на имидже
            университета в регионе и за его пределами, привлечении в университет потенциальных студентов. Задачи
            отдельных курсов, организуемых «Открытым университетом РГППУ», их непосредственное содержание определяются
            прежде всего интересами и запросами слушателей.
          </p>
          <p>
            Идея проекта «Открытого Университета РГППУ» связана с возрождением культуры дискуссий по ключевым проблемам
            современного социально-гуманитарного знания, находящимся в центре процессов развития страны. РГППУ выступает
            как инициатор цикла публичных видеолекций, c одновременной их трансляцией в пространстве Интернет для
            широкого круга заинтересованных участников. Проект предполагает активное участие студенческого и
            профессорско-преподавательского сообщества в Екатеринбурге и Свердловской области, а также всех
            профессиональных и общественных групп, имеющих интерес к проблематике современного социально-гуманитарного
            знания.
          </p>
          <p>
            Цель проекта «Открытый университет РГППУ» - формирование нового образа Университета как лидера современных
            разработок и сценариев социально-гуманитарного действия, соразмерного сегодняшней региональной, национальной
            и мировой ситуации.
          </p>
        </div>
      </div>
    </div>
    <div class="principles" ref="principlesRef">
      <h1>Принципы работы "Открытого университета"</h1>
      <div class="info">
        <div class="text">
          <p>
            В реализации образовательного проекта используются современные технологические, цифровые решения.
            Разработана образовательная платформа, где используются различные формы донесения важной информации, о
            краткосрочных и стратегических планах РГППУ непосредственно от руководства и сотрудников Университета. Это
            позволяет приобрести новые профессиональные компетенции, настроить лояльность к Университету.
          </p>
          <p>
            Высокий уровень профессионализма преподавателей, который проявляется не только в глубоких научных знаниях и
            умениях, но и в способности обучать и просвещать людей во все периоды их жизни, стимулировать и поддерживать
            познавательную мотивацию слушателей.
          </p>
          <p>
            Демократический характер управления и самоуправление – еще одна особенность работы «Открытого университета».
            В рамках проекта регулярно будут проводиться небольшие анкетирования для оценки слушателями организации
            работы и качества предлагаемых образовательных продуктов, а также для внесения предложений по
            совершенствованию деятельности «Открытого университета».
          </p>
          <p>
            Главная задача инициативы – рост количества преподавателей, осуществляющих инновационную образовательную
            деятельность; рост уровня профессиональной подготовки руководителей подразделений Университета к внедрению
            современных механизмов управления. Инициатива также предусматривает совершенствование организации
            образовательного процесса, использование современных технологий и инструментов мотивации обучающихся,
            повышения качества подготовки выпускников университета.
          </p>
          <p>
            Эти форматы помогают развитию преподавательских компетенций участников инициативы, способствуют разработке
            современных учебно- методических материалов (кейс-технологии, демонстрационные материалы) по актуальным
            тематикам, изложенные с практической точки зрения.
          </p>
          <p>
            Помимо образовательного аспекта в проекте особое внимание уделяется социально-коммуникативным вопросам,
            направленным на внутренние коммуникации. Налаживание взаимоотношений по горизонтали управления процессами,
            развитие духовно-нравственного аспекта корпоративной культуры Университета.
          </p>
        </div>
      </div>
    </div>
        <div class="mission" ref="missionRef">
      <h1>Наша миссия</h1>
      <div class="info">
        <div class="text">
          <p>
            Современный этап общественного развития, часто называемый «обществом знания», характеризуется тем, что
            постоянно развивающееся и обновляющееся знание является условием социально-экономического развития общества
            в целом и фактором развития активности каждого человека. Сущность современных концепций непрерывного
            образования заключается в обосновании необходимости постоянного обучения человека в течение всей жизни, т.
            е. на всех возрастных этапах.
          </p>
          <p>
            Миссия «Открытого Университета РГППУ» – совершенствование процессов обучения, обеспечивающее непрерывное
            повышение квалификации сотрудников, формирование современных компетенций, необходимых для разработки и
            реализации конкурентоспособных, высокотехнологичных образовательных продуктов.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  width: 100%;
  margin: 0px auto;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  h1 {
    width: 80%;
    margin: 0 auto;
    padding: 20px;
    padding-top: 150px;
  }
  .project {

    transform: translateX(-200%);
    transition: 1s ease all;
    background: url('@/assets/images/fon1.png') no-repeat;
    opacity: 0;
  }
  .mission {
    transform: translateX(200%);
    transition: 1s ease;
    opacity: 0;
    background: url('@/assets/images/fon2.png') no-repeat;
  }
  .principles {
    transform: translateX(-200%);
    transition: 1s ease;
    background: url('@/assets/images/fon3.png') no-repeat;
    opacity: 0;
    padding-bottom: 100px;
  }
  .project,
  .mission,
  .principles {
    display: flex;
    flex-direction: column;
    gap: 20px;
    min-height: 100vh;
    z-index: 1;
    width: 100vw;
    color: #fff;
    transition: 0.9s ease all;
    position: relative;
    background-size: cover;
    &::before {
      position: absolute;
      content: '';
      width: 100%;
      height: 100%;
      z-index: -1;
      background: #082549e3;
    }
    .info {
      width: 100%;
      height: 100%;
      display: flex;
      gap: 40px;
      align-items: flex-start;
      justify-content: center;
      color: #fff;
      .image {
        flex: 50% 0 0;
        width: 100%;
        height: 100%;
        position: relative;
        img {
          width: 100%;
          height: 100%;
          z-index: 10;
          padding: 4px;
        }
        &::before {
          content: '';
          width: 100%;
          height: 100%;
          position: absolute;
          z-index: 22;
        }
      }
      .text {
        width: 100%;
        height: 100%;
        flex: 50% 0 0;
        display: flex;
        flex-direction: column;
        gap: 20px;
      }
    }
  }
  .project,
  .mission,
  .principles {
    h1 {
      font-family: 'Open Sans';
      font-style: normal;
      font-weight: 700;
      font-size: 36px;
      text-transform: uppercase;
    }
    p {
      width: 80vw;
      margin: 0 auto;
      font-family: 'Play';
      font-style: normal;
      font-weight: 400;
      font-size: 24px;
      text-align: justify;
      word-wrap: break-word;
      text-indent: 30px;
    }
  }
}
@media (min-width: 2559px) {
  .container {
    .project,
    .principles,
    .mission {
      h1 {
        font-size: 3rem;
      }
      p {
        font-size: 2.5rem;
      }
    }
  }
}
@media (max-width: 1024px) {
  .container {
    h1 {
      font-size: 3rem;
    }
    .project,
    .mission,
    .principles {
      width: 100%;
      .info {
        flex-direction: column;
      }
      h1 {
        font-size: 3rem;
      }
      p {
        width: 80%;
        font-size: 2.5rem;
      }
    }
  }
}
@media (max-width: 425px) {
  .container {
    h1 {
      font-size: 3rem;
    }
    .project,
    .mission,
    .principles {
      .info {
        flex-direction: column;
      }
      h1 {
        font-size: 3rem;
      }
      p {
        font-size: 2.5rem;
      }
    }
  }
}
</style>
