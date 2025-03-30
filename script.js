// Adiciona efeitos quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', () => {
    // Setup do menu mobile
    setupMobileMenu();
  
    // Adicionar efeito de scroll ao cabeçalho
    setupScrollEffect();
  
    // Iniciar animações
    setupAnimations();
  
    // Configurar filtros do portfólio
    setupPortfolioFilters();
  
    // Configurar formulário de contato
    setupContactForm();
  });
  
  // Setup do menu mobile
  function setupMobileMenu() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navList = document.querySelector('.nav-list');
  
    if (mobileMenuBtn && navList) {
      mobileMenuBtn.addEventListener('click', () => {
        navList.classList.toggle('active');
        const icon = mobileMenuBtn.querySelector('i');
        if (icon) {
          icon.classList.toggle('fa-bars');
          icon.classList.toggle('fa-times');
        }
      });
    }
  }
  
  // Efeito de scroll no header
  function setupScrollEffect() {
    const header = document.querySelector('.header');
  
    if (header) {
      window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
          header.classList.add('scrolled');
        } else {
          header.classList.remove('scrolled');
        }
      });
    }
  }
  
  // Inicializar animações
  function setupAnimations() {
    const animatedElements = document.querySelectorAll('.animate');
  
    // Função para verificar se o elemento está visível
    const isElementInViewport = (el) => {
      const rect = el.getBoundingClientRect();
      return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
        rect.bottom >= 0
      );
    };
  
    // Executar animação quando o elemento estiver visível
    const handleScrollAnimation = () => {
      animatedElements.forEach(el => {
        if (isElementInViewport(el)) {
          el.classList.add('visible');
        }
      });
    };
  
    // Verificar ao carregar e ao rolar
    window.addEventListener('scroll', handleScrollAnimation);
    window.addEventListener('load', handleScrollAnimation);
  
    // Executa a primeira vez para elementos já visíveis
    handleScrollAnimation();
  }
  
  // Configurar filtros do portfólio
  function setupPortfolioFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
  
    if (filterBtns.length > 0) {
      filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          // Remover classe active de todos os botões
          filterBtns.forEach(btn => btn.classList.remove('active'));
  
          // Adicionar classe active ao botão clicado
          btn.classList.add('active');
  
          // Obter categoria do filtro
          const filterValue = btn.getAttribute('data-filter');
  
          // Filtrar itens
          portfolioItems.forEach(item => {
            if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
              item.style.display = 'block';
            } else {
              item.style.display = 'none';
            }
          });
        });
      });
    }
  }
  
  // Configurar formulário de contato
  function setupContactForm() {
    const contactForm = document.getElementById('contactForm');
  
    if (contactForm) {
      contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
  
        // Obter valores do formulário
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
  
        // Aqui você adicionaria a lógica de envio do formulário
        // Exemplo simples de validação
        if (name && email && subject && message) {
          // Simulando envio bem-sucedido
          alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
          contactForm.reset();
        } else {
          alert('Por favor, preencha todos os campos.');
        }
      });
    }
  }
  
  // Função para rolagem suave ao clicar em links âncora
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
  
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
  
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 100,
          behavior: 'smooth'
        });
  
        // Fechar menu mobile se estiver aberto
        const navList = document.querySelector('.nav-list');
        if (navList && navList.classList.contains('active')) {
          navList.classList.remove('active');
          const icon = document.querySelector('.mobile-menu-btn i');
          if (icon) {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
          }
        }
      }
    });
  });
  