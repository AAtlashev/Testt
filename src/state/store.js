let store = {
    questions: [ 
        {
        questionNumber: 'Question 1',
        question: 'От какого класса идет наследование всех компонентов?',
        var1: 'React.Component',
        var2: 'ReactJS.Component',
        var3: 'ComponentReact',
        value1: 'yes',
        value2: 'no',
        value3: 'no',
        path: '/1',
        link: '/2',
        next: 'NEXT'
        },
        
        {
        questionNumber: 'Question 2',
        question: ' Как много компонентов может быть на сайте?',
        var1: 'Не более 300',
        var2: 'Неограниченное количество',
        var3: 'Не более 100',
        value1: 'no',
        value2: 'yes',
        value3: 'no',
        path: '/2',
        link: '/3',
        next: 'NEXT'
        
         },

         {
        questionNumber: 'Question 3',
        question: ' Какой метод отвечает за вывод информации через React JS компонент?',
        var1: 'render',
        var2: 'ReactDOM',
        var3: 'console',
        value1: 'yes',
        value2: 'no',
        value3: 'no',
        path: '/3',
        link: '/4',
        next: 'NEXT'
         },

        {
        questionNumber: 'Question 4',
        question: ' Где правильно создан компонент?',
        var1: 'class App extends Component {}',
        var2: 'some answer',
        var3: 'class App extends React.Component {}',
        value1: 'no',
        value2: 'no',
        value3: 'yes',
        path: '/4',
        link: '/5',
        next: 'NEXT'
         },

         {
        questionNumber: 'Question 5',
        question: ' Где правильно выведен компонент через рендер?',
        var1: '</Test>',
        var2: '<Test/>',
        var3: '<Test>',
        value1: 'no',
        value2: 'yes',
        value3: 'no',
        path: '/5',
        link: '/6',
        next: 'NEXT'
         },

          {
        questionNumber: 'Question 6',
        question: ' Как обратится к свойству weight?',
        var1: '{this.props.weight}',
        var2: '{props.weight}',
        var3: '{this.prop.weight}',
        value1: 'yes',
        value2: 'no',
        value3: 'no',
        path: '/6',
        link: '/7',
        next: 'NEXT'
         },

          {
        questionNumber: 'Question 7',
        question: ' Сколько родительских HTML тегов может быть выведено в React JS компоненте?',
        var1: 'Всегда 1',
        var2: 'Неограниченное количество',
        var3: 'Не более 10',
        value1: 'yes',
        value2: 'no',
        value3: 'no',
        path: '/7',
        link: '/8',
        next: 'NEXT'
         },

         {
        questionNumber: 'Question 8',
        question: ' Можно ли писать не используя Babel?',
        var1: 'Можно ',
        var2: 'Нельзя',
        var3: 'Можно, но не нужно',
        value1: 'yes',
        value2: 'no',
        value3: 'no',
        path: '/8',
        link: '/9',
        next: 'NEXT'
         },

         {
        questionNumber: 'Question 9',
        question: ' React JS – это...',
        var1: 'фреймворк',
        var2: 'MVC-фреймворк',
        var3: 'JavaScript библиотека'        ,
        value1: 'no',
        value2: 'no',
        value3: 'yes',
        path: '/9',
        link: '/10',
        next: 'NEXT'
         },

         {
        questionNumber: 'Question 10',
        question: 'Где правильно передена функция в качестве свойства?',
        var1: 'argument={this.someFunction ()}',
        var2: 'argument={this.someFunction}',
        var3: 'argument={someFunction}'        ,
        value1: 'no',
        value2: 'yes',
        value3: 'no',
        path: '/10',
        link: '/11',
        next: 'NEXT'
         },

            {
        questionNumber: 'Question 11',
        question: 'Какая компания разработала React JS?',
        var1: 'GitHub',
        var2: 'Google',
        var3: 'Facebook',
        value1: 'no',
        value2: 'no',
        value3: 'yes',
        path: '/11',
        link: '/12',
        next: 'NEXT'
         },

          {
        questionNumber: 'Question 12',
        question: 'Чем свойства отличаются от состояний?',
        var1: 'Состояния можно изменять, свойства нельзя',
        var2: 'Свойства для работы со значениями, состояния для работы с функциями',
        var3: 'Свойства можно изменять, состояния нельзя',
        value1: 'yes',
        value2: 'no',
        value3: 'no',
        path: '/12',
        link: '/13',
        next: 'NEXT'
         },

          {
        questionNumber: 'Question 13',
        question: 'Куда можно встроить готовый код из метода render()?',
        var1: 'В div или же в span',
        var2: 'Только в тег, у которого есть id',
        var3: 'В любой тег',
        value1: 'no',
        value2: 'no',
        value3: 'yes',
        path: '/13',
        link: '/result',
        next: 'NEXT'

         },
    
    ]
    
}

export default store