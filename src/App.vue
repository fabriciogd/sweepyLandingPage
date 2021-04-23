<template>
  <div id="app">
    <img class="image-top" src="./assets/Grupo 10219@2x.png" />
    <v-row justify-content="end" class="wrapper-intro">
      <v-col class="container-intro" cols="6">
        <span class="title">
          SIMPLICIDADE
        </span>
        <span class="text">
          Pra você que quer alcançar mais consumidores, online ou offline
        </span>
        <span class="sub-text">
          Diminua seus custos virtualizando seus processos 
          e se conecte com seus clientes - deixe que o nosso algoritmo encontre 
          os seus clientes pra você, onde quer que eles estejam.
        </span>
      </v-col>
      <v-col cols="4">
        <img class="image-form" src="./assets/shutterstock_1780458068_2.png" />
        <v-form class="form-fields">
          <v-text-field v-model="name" class="form-field" label="Nome" background-color="#696868" solo hide-details="auto" />
          <v-text-field v-model="email" class="form-field" label="Email" background-color="#696868" solo hide-details="auto" />
          <v-btn class="button-submit" rounded color="#16DFFF" @click="submit">Quero meu acesso</v-btn>
        </v-form>
      </v-col>
    </v-row>
    <v-row class="justify-center wrapper-section">
      <v-col cols="4">
        <span class="title-section">
          Conecte seu restaurante, da cozinha aos consumidores
        </span>
        <span class="title-sub-section">
          Alcance seus clientes em qualquer lugar, com um POS integrado, 
          sistema de exibição de cozinha e solução de pedidos online.
        </span>
        <a class="access-link" href="#" @click="scrollTop">
          Quero me conectar e vender mais!
        </a>
      </v-col>
      <v-col cols="4">
        <img src="./assets/shutterstock_432557365.png" width="100%"/>
      </v-col>
    </v-row>
    <div class="wrapper-section image-cheff" />
    <v-row class="justify-center wrapper-section">
      <v-col cols="4">
        <span class="title-section">
          Aceite todos os tipos de pagamentos
        </span>
        <span class="title-sub-section">
          Aceite pagamentos de forma segura, quer esteja a vender pessoalmente ou online
        </span>
        <a class="access-link" href="#" @click="scrollTop">
          Quero me conectar e vender mais!
        </a>
      </v-col>
      <v-col cols="4">
        <img src="./assets/shutterstock_1928731409.png" width="100%"/>
      </v-col>
    </v-row>
    <img class="wrapper-section" src="./assets/Grupo 10229@2x.png" />
    <v-row class="justify-center wrapper-section">
      <v-col cols="4">
        <span class="title-section">
          Um kit de ferramentas de negócios. Para todos os negócios.
        </span>
        <span class="title-sub-section">
          Vendas, atração de clientes, retenção de clientes, captação de leads e remartketing. Tudo em um só lugar.        </span>
        <a class="access-link" href="#" @click="scrollTop">
          Quero me conectar e vender mais!
        </a>
      </v-col>
      <v-col cols="4">
        <img src="./assets/shutterstock_432557365.png" width="100%"/>
      </v-col>
    </v-row>
    <v-row class="footer">
      <img src="./assets/logo_sweepy@2x.png" />
      <span class="footer-text">Conectando você a seus clientes</span>
      <span class="footer-brand">Sweepy é uma marca Global Quarks. Todos os direitos reservados.</span>
    </v-row>

    <v-snackbar
      v-model="snackbar.active"
      :color="snackbar.color"
      :top="true"
      :right="true"
      style="top: 0px; padding-top: 0px"
    >
      {{ snackbar.text }}
    </v-snackbar>
  </div>
</template>

<script>
import axiosDefault from "./plugins/axios.plugin"

export default {
  name: 'App',
  data() {
    return {
      snackbar: {
        active: false,
        color: '',
        text: ''
      },
      name: '',
      email: ''
    }
  },
  methods: {
    scrollTop() {
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    },
    async submit() {
      let body = {
        grant_type: 'client_credentials',
        client_id: 'f74a53fc5b73702eca770f143fc56ec0',
        client_secret: '72c996bec843be685d5970aa688c3477'
      }

      const token = await axiosDefault.default().post('/oauth/access_token', body)

      body = [{
        email: this.email, 
        variables: {
          Name: this.name
        }
      }]

      const headers = {
        'Authorization': 'Bearer ' + token.data.access_token
      }

      const email = await axiosDefault.default().post('/addressbooks/278864/emails', { emails: body }, {
        headers: headers
      })

      if (email.data.result === true) {
        this.snackbar.active = true;
        this.snackbar.color = '#00C853';
        this.snackbar.text = 'Email cadastrado com sucesso'
      }
    }
  }
}
</script>

<style>
html {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #121212;
  margin-top: 0px;
}

.image-top {
  z-index: -1;
  position: absolute;
  top: -30vh;
  left: 0;
  width: 130vw;
  height: 130vh;
  filter: blur(32px);
  left: -15vw;
}

.image-form {
  width: 500px;
  height: 250px;
  margin-left: -40px;
  position: relative;
  z-index: 1;
}

.wrapper-intro {
  align-items: flex-end;
}

.container-intro {
  margin-left: 80px;
  margin-top: 80px;
  padding: 40px 40px 40px 40px !important;
  background: #000000 0% 0% no-repeat padding-box;
  opacity: 1;
  background: rgba(0,0,0,0.8);
  backdrop-filter: saturate(180%) blur(10px);
}

.container-intro .title {
  font: normal normal normal 16px/19px Montserrat;
  letter-spacing: 0px;
  color: #2CD4EC;
  text-transform: uppercase;
  opacity: 1;
  float: left;
}

.container-intro .text {
  margin-top: 40px;
  text-align: left;
  font: normal normal bold 48px/58px Montserrat;
  letter-spacing: 0px;
  color: #FFFFFF;
  float: left;
}

.container-intro .sub-text
{
  margin-top: 40px;
  text-align: left;
  font: normal normal normal 16px/32px Montserrat;
  letter-spacing: 0px;
  color: #FFFFFF;
  opacity: 1;
  float: left;
}

.form-fields {
  margin-top: 30px;
}

.form-fields .form-field{
  margin-bottom: 10px !important;
}

.wrapper-section {
  margin-top: 100px !important;
}

.title-section {
  text-align: left;
  font: normal normal bold 32px/39px Montserrat;
  letter-spacing: 0px;
  color: #FFFFFF;
  opacity: 1;
  float: left;
}

.title-sub-section {
  margin-top: 10px;
  text-align: left;
  font: normal normal normal 16px/29px Montserrat;
  letter-spacing: 0px;
  color: #FFFFFF;
  opacity: 0.6;
  float: left;
}

.access-link {
  margin-top: 40px;
  text-align: center;
  font: normal normal normal 16px/19px Montserrat;
  letter-spacing: 0px;
  color: #2CD4EC;
  opacity: 1;
  float: left;
}

.justify-center {
  justify-content: center;
}

.image-cheff {
  left: 0px;
  width: 100%;
  height: 500px;
  background: transparent url('./assets/shutterstock_558110953_2.png') 0% 0% no-repeat padding-box;
  background-size: cover;
}

.footer {
  background: #030303 0% 0% no-repeat padding-box;
  padding: 100px 200px 100px 200px;
}

.footer-text {
  margin-left: 30px;
  width: 172px;
  height: 38px;
  text-align: left;
  font: normal normal normal 16px/19px Montserrat;
  letter-spacing: 0px;
  color: #FFFFFF;
  text-transform: uppercase;
  opacity: 1;
}

.footer-brand {
  width: 583px;
  height: 19px;
  text-align: left;
  font: normal normal 300 16px/29px Montserrat;
  letter-spacing: 0px;
  color: #FFFFFF;
  opacity: 0.6;
  margin-top: 50px;
}
</style>
