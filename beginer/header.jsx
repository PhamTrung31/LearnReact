const lastname = 'Trung'

const divide = (a, b) => a - b

const date = new Date()
const year = date.getFullYear(Date.now)

const element = (
  <h1>
    Hello World! I am {lastname}. I am {divide(year, 2003)} year old!
  </h1>
)
const element2 = (
  <a href='google.com' tabIndex='11' className='123' id='the-a'>
    Google
  </a>
)
