module.exports = ({errors}) => {
    return `
  <!DOCTYPE html>
  <html>
   
  <head>
    <link rel='stylesheet' href=
  'https://cdnjs.cloudflare.com/ajax/libs/bulma/0.9.0/css/bulma.min.css'>
   
    <style>
      div.columns {
        margin-top: 100px;
      }
   
      .button {
        margin-top: 10px
      }
    </style>
  </head>
   
  <body>
    <div class='container'>
      <div class='columns is-centered'>
        <div class='column is-5'>
          <form action='/' method='POST'>
            <div>
              <div>
                <label class='label'
                  id='str'>Name
                </label>
              </div>
              <input class='input' type='text'
                name='name' placeholder='Name'
                for='name'>
            </div>
            <div>
              <div>
                <label class='label' id='email'>
                  Email
                </label>
              </div>
              <input class='input' type='email'
                name='email' placeholder='Email'
                for='email'>
            </div>
            <div>
              <button class='button is-info'>
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </body>
   
  </html>
    `
  }