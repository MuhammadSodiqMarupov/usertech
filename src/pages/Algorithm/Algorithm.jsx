import "./Algorithm.scss";
const Algorithm = ({ langIndex }) => {
  const langData = [
    {
      titleGLOBAL: "Our approach to projects",
      span1:
        " Can a durable house be built without a project and drawings? Can its construction cost be estimated without an estimate? Of course not, you would say. Indeed, if we are not talking about a country hut, no one would ever think of building a house without drawings.",
      span2:
        " At the same time, customers of mobile and web applications often miss such an important stage as design. This leads to conflicts with developers, mismatched expectations, and ultimately - project failure, wasted money, and time.",
      title2:
        "We explain how we manage to create cool mobile and web applications.",
      li1: "Work with any order at ",
      li1_span: "UserTech",
      li1_span2:
        " starts with the development of a technical assignment, this is a mandatory stage. The deadline for developing a technical assignment is",
      li1_span3: "100 working hours",
      li1_last: "of the team",
      li2: " In the created technical specification, we provide a calculation of the cost and timing of the project and send it for approval. As soon as the customer approves them, we start developing the project.",
      li3_start: "Development is usually divided into",
      li3_span: "3-4 stages",
      li3_last:
        ", with clear indicators of product readiness. Payment can also be divided into stages.",
      li4: "After the project is developed and delivered, we provide paid technical support and maintenance for an unlimited time.",
      liRemains: "We work according to the methodology",
      liRemainsSpan: "Agile",
      liRemains2:
        "with a division into sprints lasting 1 week. Usually, during the week, an update of the working version of the product takes place, the development of which our clients can observe in real-time mode. Creating the primary working version can take",
      liRemainsSpan2: "3-4 sprints",
      liRemainsLast: "from the start.",
      h2: "Technical task for project development",
      p1: "Just as a good house cannot be built without a project, so a good application cannot be developed without a detailed description. The project concept (also known as a technical task or design document in mobile games) is what we need to start developing any product, it is the first thing we start working on with each client. Without a technical task, it is impossible to accurately estimate the cost and development time of the project.",
      h1_2: "What is a technical task",
      p2: "A technical task is a document that contains a detailed description of the future product from various angles: conceptual, usability and use cases, and technical requirements. In the created technical task, specialists of our company often include screen diagrams of the future application, which facilitates perception.",
      h1_3: "What problems does the technical task solve",
      ul2_li1_start:
        "The technical task allows you to detail the project, work out all the nuances that can significantly depend on the",
      ul2_li1_span: "cost and deadlines",
      ul2_li1_last: "And they are the most interesting to the customer.",
      ul2_li2:
        "Synchronize understanding of the project between the customer and the performer. Often this understanding can differ significantly and an unworked out technical task can lead to conflicts.",
      pLast:
        "The document is prepared in Google Docs, to which we immediately provide access. Thus, the customer can follow the preparation of the document in real time, make corrections or suggestions.",
      pLast2:
        "UserTech designates a project manager for the customer, who, in a dialogue mode, clarifies the details of the desired application, suggests one or another solution. If necessary, he can involve more narrow specialists in the development of a technical task not only from a technical, but also from a legal point of view.",
      pLast2Span: "UserTech",
      pRandom:
        "Our highest qualified specialists with experience in various fields provide services for developing a technical task. They are able to see optimal solutions where others cannot.",
      liRandom: "Determine ways to solve complex aspects of the project.",
      pRandom2:
        "On average, the technical task takes 20-40 A4 pages. At the end of it, specialists of our company provide a calculation of the cost and terms of project implementation.",
      h1Last: "How the technical task is done",
      h1Random: "How the technical task is done",
      pRandom3:
        "Each technical specification has its own structure, but in general, the main sections can be highlighted:",
      ulLastli1:
        "A simple explanation of what product or service is being developed, what it is for, and how it works.",
      ulLastSpan: "Project description.",
      ulLastLi2Span: "Component structure.",
      ulLastli2:
        "Which components will be in the product: backend, frontend, mobile applications; how they will interact with each other.",
      ulLastLi3:
        "Which programming languages will be used, technical requirements for software.",
      ulLastLi3Span: "Technology stack.",
      ulLastLi4:
        "User scenarios for using the application. This section may also include a screen map and mockups of key screens.",
      ulLastLi4Span: "Use cases.",
      ulLastliLast:
        "How protection against hacking will be implemented, as well as resistance to loads and scaling.",
      ulLastliLastSpan: "Security and fault tolerance.",
    },
    {
      titleGLOBAL: "Наш подход к проектам",
      span1:
        "  Можно ли построить долговечный дом без проекта и чертежей? Можно ли оценить стоимость его постройки без сметы? Конечно же нет, скажете вы. Действительно, если речь не о дачной избушке, никому в голову не придёт строить дом без чертежей.",
      span2:
        "   В то же время заказчики мобильных и веб-приложений часто упускают такой важный этап, как проектирование. Из-за этого возникают конфликты с разработчиками, разрыв ожиданий, в результате — провал проекта, потерянные деньги и время.",
      title2:
        "Рассказываем, как нам удаётся делать классные мобильные и веб-приложения.",
      li1: "Работа с любым заказом в ",
      li1_span: "UserTech",
      li1_span2:
        " начинается с  разработки технического задания , это обязательный этап. Срокиразработки технического задания — от",
      li1_span3: "100 рабочих часов",
      li1_last: "команды",
      li2: " В созданном ТЗ мы предоставляем расчёт стоимости и сроков проекта и отправляем на согласование. Как только заказчик их согласует, начинаем разрабатывать проект.",
      li3_start: "Разработка обычно делится на ",
      li3_span: "3-4 этапа",
      li3_last:
        ", с чёткими показателями готовности продукта. Оплата также может делиться наэтапы.",
      li4: "После того как проект разработан и сдан, мы предоставляем платную техподдержку и сопровождение на неограниченное время.",
      liRemains: "Мы работаем по методологии ",
      liRemainsSpan: "Agile",
      liRemains2:
        "с разделением на спринты продолжительностью 1 неделя. Как правило, в течение недели происходит обновление рабочей версии продукта, за развитием которого наши клиенты могут наблюдать в режиме реального времени. Создание первичной рабочей версии может занимать ",
      liRemainsSpan2: "3-4 спринта",
      liRemainsLast: "с момента старта.",
      h2: "Техническое задание на разработку проекта",
      p1: "Как хороший дом невозможно построить без проекта  и че р теже й, так и хорошее приложение не получится разработать без детального описания.Концепт проекта (он же техническое задание или дизайн-документ вмобильных играх) — это то, с чего необходимо начинать разработкулюбого продукта, это первое, с чего мы начинаем работу с каждымклиентом. Без технического задания невозможно точно оценитьстоимость и сроки разработки проекта.",
      h1_2: "Что такое техническое задание",
      p2: "  Техническое задание — это документ, который содерж ит де тальное описание будущего продукта с разных сторон: концептуальной, стороныюзабилити и юзкейсов, технических требований. В создаваемые ТЗспециалисты нашей компании зачастую включают схемы экранов будущегоприложения, что упрощает восприятие.",
      h1_3: "Какие задачи решает ТЗ",
      ul2_li1_start:
        " ТЗ позволяет детализировать проект, проработать все нюансы, от которых могут значительно зависеть ",
      ul2_li1_span: "стоимость и сроки",
      ul2_li1_last: "  А они интересуют заказчика больше всего.",
      ul2_li2:
        "Синхронизировать понимание проекта между заказчик ом и исполнителем. Часто это понимание может сильно различаться и безпроработанного ТЗ приводить к конфликтам.",
      pLast:
        "Документ готовится в Google Docs, доступ к которому мы сразу предоставляем. Таким образом заказчик может в режиме реального времени следить за подготовкой документа, вносить в него коррективы или предложения.",
      pLast2:
        "выделяет заказчику проектного менеджера, который в режиме диалога выясняет детали желаемого приложения, предлагает те или иные решения. При необходимости он может привлекать к разработке ТЗ более узких специалистов не только с технической, но и с юридической стороны.",
      pLast2Span: "UserTech",
      pRandom:
        " У нас услуги по разработке технического задания оказывают специалисты наивысшей квалификации, с опытом в различных областях.  Они способны увидеть оптимальные решения там, где другие не могут.",
      liRandom: "Определить пути решения сложных аспектов проекта.",
      pRandom2:
        "   В среднем техническое задание занимает 20–40 страниц A4. В конце него специалисты нашей компании предоставляют расчёт стоимости и сроков выполнения проекта.",
      h1Last: "Как делается техническое задание",
      h1Random: "Как делается техническое задание",
      pRandom3:
        "   У каждого технического задания своя структура, но в целом можно выделить основные разделы:",
      ulLastli1:
        "Простое объяснение того, какой продукт или сервис разрабатывается, для чего нужен, как работает.",
      ulLastSpan: "Описание проекта.",
      ulLastLi2Span: "Структура компонентов.",
      ulLastli2:
        "Какие компоненты будут в  продукте: backend, frontend, мобильные приложения; как они будут взаимодействовать между собой.",
      ulLastLi3:
        "Какие языки программирования будут использоваться, технические требования к программному обеспечению.",
      ulLastLi3Span: "Технологический стек.",
      ulLastLi4:
        "Сценарии использования приложения пользователями. В этом разделе также могут быть карта экранов и мокапы ключевых экранов.",
      ulLastLi4Span: "Юзкейсы.",
      ulLastliLast:
        " Каким образом будет реализовываться защита  от взлома, а также устойчивость кнагрузкам и масштабирование.",
      ulLastliLastSpan: "Безопасность и отказоустойчивость.",
    },
    {
      titleGLOBAL: "我们的项目方法",
      span1:
        "能够不使用项目和图纸建造一座耐久的房子吗？能够不使用预算评估建造成本吗？当然不行，你会说。确实，如果不是在小屋子上，没有人会想着建造房子而不使用图纸。",
      span2:
        "与此同时，移动和Web应用程序的客户经常错过设计这一重要阶段。这导致与开发人员的冲突，期望的落差，最终导致项目失败，浪费时间和金钱。",
      title2: "让我们告诉你我们如何创建出色的移动和Web应用程序。",
      li1: "与",
      li1_span: "UserTech",
      li1_span2:
        "的任何订单都始于技术任务的开发，这是必要的阶段。技术任务的开发时间为",
      li1_span3: "100个工作小时",
      li1_last: "的团队",
      li2: "在创建的技术任务中，我们提供项目的成本和时间计算，并发送给客户进行审批。一旦客户同意，我们就开始开发项目。",
      li3_start: "开发通常分为",
      li3_span: "3-4个阶段",
      li3_last: "，具有明确的产品完成指标。付款也可以分阶段。",
      li4: "在项目开发和交付后，我们提供付费技术支持和无限期的维护。",
      liRemains: "我们按照",
      liRemainsSpan: "敏捷方法",
      liRemains2:
        "进行工作，将其分成为期为1周的冲刺。通常，一周内会更新工作版本的产品，客户可以实时观察产品的发展。创建初始工作版本可能需要",
      liRemainsSpan2: "3-4个冲刺",
      liRemainsLast: "从开始算起。",
      h2: "开发项目的技术任务书",
      p1: "就像没有设计图，你就不能建造一座好房子一样，没有详细说明，就不能开发一个好的应用程序。概念设计（即技术任务书或移动游戏设计文档）是开发任何产品的起点，这是我们与每个客户开始合作的第一步。没有技术任务书，就无法准确评估项目开发的成本和时间。",
      h1_2: "技术任务书是什么",
      p2: "技术任务书是一份文档，它从不同角度对未来的产品进行详细描述：概念、可用性和用户案例、技术要求。在我们公司创建的技术任务书中，专家们经常包括未来应用程序屏幕的图示，这样更易于理解。",
      h1_3: "技术任务书解决了哪些问题",
      ul2_li1_start:
        "技术任务书可以详细说明项目，解决所有细节问题，这些问题可能会显著影响",
      ul2_li1_span: "成本和时间",
      ul2_li1_last: "这是客户最关心的。",
      ul2_li2:
        "同步客户和执行人对项目的理解。通常，这种理解可能会有很大差异，没有详细的技术任务书，可能会导致冲突。",
      pLast:
        "该文档是在 Google Docs 中准备的，我们立即提供访问权限。因此，客户可以实时跟踪文档的准备情况，对其进行修改或提出建议。",
      pLast2:
        "它为客户分配项目经理，通过对话了解所需应用程序的详细信息，并提供各种解决方案。如有需要，他们可以吸引不仅有技术，而且有法律方面的专家来开发技术任务书。",
      pLast2Span: "UserTech",
      pRandom:
        "我们的技术任务书开发服务由经验丰富的顶级专家提供，他们在各种领域都有经验。他们可以在其他人无法看到的地方找到最佳解决方案。",
      liRandom: "确定解决项目的复杂方面的方法。",
      pRandom2:
        "技术任务书通常为 20-40 页 A4。最后，我们公司的专家将提供项目完成的成本和时间估算。",
      h1Last: "如何制作技术任务书",
      h1Random: "如何制作技术任务书",
      pRandom3: "每个技术规范都有其自己的结构，但通常可以将主要部分突出显示：",
      ulLastli1:
        "对正在开发的产品或服务的简单说明，它是用来做什么的以及如何工作。",
      ulLastSpan: "项目描述。",
      ulLastLi2Span: "组件结构。",
      ulLastli2:
        "产品中将有哪些组件：后端、前端、移动应用程序；它们将如何相互交互。",
      ulLastLi3: "将使用哪些编程语言，软件的技术要求。",
      ulLastLi3Span: "技术栈。",
      ulLastLi4:
        "用户使用应用程序的场景。本节还可以包括屏幕地图和关键屏幕的模型。",
      ulLastLi4Span: "使用案例。",
      ulLastliLast: "如何实现防止黑客入侵，以及如何抵御负载和扩展。",
      ulLastliLastSpan: "安全性和容错性。",
    },
  ];
  return (
    <div className="parent">
      <div className="container">
        <div className="content">
          <h1 className="title_main">{langData[langIndex]?.titleGLOBAL}</h1>
          <div className="title">
            <span>{langData[langIndex]?.span1}</span>
            <span>{langData[langIndex]?.span2}</span>
          </div>
          <p className="title-2">{langData[langIndex]?.title2}</p>
          <ul className="ul-1">
            <li>
              {langData[langIndex]?.li1}
              <strong>{langData[langIndex]?.li1_span}</strong>
              {langData[langIndex]?.li1_span2}
              <strong>{langData[langIndex]?.li1_span3}</strong>{" "}
              {langData[langIndex]?.li1_last}
            </li>
            <li>{langData[langIndex]?.li2}</li>
            <li>
              {langData[langIndex]?.li3_start}
              <strong>{langData[langIndex]?.li3_span}</strong>
              {langData[langIndex]?.li3_last}
            </li>
            <li>
              {langData[langIndex]?.liRemains}{" "}
              <strong>{langData[langIndex]?.liRemainsSpan}</strong>{" "}
              {langData[langIndex]?.liRemains2}{" "}
              <strong>{langData[langIndex]?.liRemainsSpan2}</strong>{" "}
              {langData[langIndex]?.liRemainsLast}
            </li>
            <li>{langData[langIndex]?.li4}</li>
          </ul>

          <h1 className="h-2">{langData[langIndex].h2}</h1>
          <p className="p-2">{langData[langIndex].p1}</p>
          <h1>{langData[langIndex].h1_2}</h1>
          <p>{langIndex[langData]?.p2}</p>
          <h1>{langIndex[langData]?.h1_3}</h1>

          <ul>
            <li>
              {langData[langIndex].ul2_li1_start}
              <span>{langData[langIndex]?.ul2_li1_span}</span>.
              {langData[langIndex]?.ul2_li1_last}
            </li>
            <li>{langData[langIndex]?.ul2_li2}</li>
            <li>{langData[langIndex]?.liRandom}</li>
          </ul>
          <p>{langData[langIndex]?.pRandom}</p>
          <h1>{langData[langIndex]?.h1Random}</h1>
          <p>{langData[langIndex].pRandom3}</p>
          <ul className="ul-2">
            <li>
              <span>{langData[langIndex].ulLastSpan}</span>{" "}
              {langData[langIndex].ulLastli1}
            </li>
            <li>
              <span>{langData[langIndex].ulLastLi2Span}</span>{" "}
              {langData[langIndex].ulLastli2}
            </li>
            <li>
              <span>{langData[langIndex].ulLastLi3Span}</span>{" "}
              {langData[langIndex].ulLastLi3}
            </li>
            <li>
              <span>{langData[langIndex].ulLastliLastSpan}</span>{" "}
              {langData[langIndex].ulLastLi4}
            </li>
            <li>
              <span>{langData[langIndex].ulLastliLast}</span>
              {langData[langIndex].ulLastliLast}
            </li>
          </ul>
          <p>{langData[langIndex].pRandom2}</p>
          <h1>{langData[langIndex].h1Last}</h1>
          <p>
            {langData[langIndex]?.pLast2}
            <span>{langData[langIndex]?.pLast2Span}</span>
          </p>
          <p>{langData[langIndex]?.pLast}</p>
        </div>
      </div>
    </div>
  );
};

export default Algorithm;
