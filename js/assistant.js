(() => {
  "use strict";

  const TUTORIALS = {
    produto: [
      {
        title: "📦 Cadastro de Novo Produto",
        text: "Aqui você adiciona novos itens ao catálogo da sua loja. Preencha as informações com atenção para deixar seu anúncio completo.",
        btnText: "Próximo"
      },
      {
        title: "🏷️ Categoria e Informações",
        text: "Escolha o <strong>Tipo de produto</strong> adequado e defina o nome, preço e quantidade disponível do item.",
        btnText: "Próximo"
      },
      {
        title: "🎨 Variações e Atacado",
        text: "Cadastre opções de <strong>cor e tamanho</strong> e ative a opção de <strong>venda no atacado</strong> caso ofereça descontos em quantidade.",
        btnText: "Próximo"
      },
      {
        title: "📸 Imagem e Confirmação",
        text: "Adicione uma boa foto do produto e clique em <strong>Cadastrar produto</strong> ao final para publicar o item na sua loja.",
        btnText: "Entendi!"
      }
    ],

    marketing: [
      {
        title: "📣 Central de Marketing",
        text: "Bem-vindo à sua Central de Marketing! Aqui você encontra soluções para atrair clientes, aumentar suas vendas e promover sua marca no Moda Center.",
        btnText: "Próximo"
      },
      {
        title: "🏷️ Promoções e Ofertas Relâmpago",
        text: "Crie campanhas de desconto para sua loja através dos botões <strong>Promoções</strong> e <strong>Ofertas Relâmpago</strong>.",
        btnText: "Próximo"
      },
      {
        title: "📊 Campanhas Ativas",
        text: "Acompanhe na seção <strong>Campanhas que estão rodando</strong> as promoções ativas no momento.",
        btnText: "Próximo"
      },
      {
        title: "💡 Dicas de Vendas",
        text: "Consulte a área de <strong>Dicas para vender mais</strong> para conferir estratégias de divulgação e conteúdos para o comércio do Moda Center.",
        btnText: "Entendi!"
      }
    ],

    chat: [
      {
        title: "💬 Central de Mensagens",
        text: "Esta é sua central de conversas! Aqui você se comunica diretamente com clientes para tirar dúvidas, negociar e acompanhar pedidos.",
        btnText: "Próximo"
      },
      {
        title: "🔎 Buscando Conversas",
        text: "Utilize a barra <strong>Pesquise algo ou alguém...</strong> para encontrar mensagens antigas ou conversas com clientes específicos.",
        btnText: "Próximo"
      },
      {
        title: "➕ Iniciar Mensagem",
        text: "Clique no botão flutuante <strong>+</strong> ou no ícone no cabeçalho para visualizar seus contatos e iniciar uma nova conversa.",
        btnText: "Próximo"
      },
      {
        title: "🤖 Suporte do Robô",
        text: "Caso precise de ajuda para localizar setores ou tirar dúvidas sobre o sistema, clique no ícone do <strong>Robô Guia</strong> no canto superior.",
        btnText: "Entendi!"
      }
    ],

    perfil: [
      {
        title: "👤 Perfil da Loja",
        text: "Aqui você gerencia a identidade da sua loja e acompanha suas métricas, como vendas, catálogo e avaliações.",
        btnText: "Próximo"
      },
      {
        title: "✏️ Editar Dados e Localização",
        text: "Clique em <strong>Editar meu perfil</strong> para atualizar a foto da loja, segmentos de venda e localização.",
        btnText: "Próximo"
      },
      {
        title: "📊 Relatórios e Atalhos",
        text: "Utilize os atalhos para abrir seus <strong>Relatórios de vendas</strong>, consultar <strong>Minhas avaliações</strong> ou visualizar as <strong>Últimas vendas</strong>.",
        btnText: "Próximo"
      },
      {
        title: "⚙️ Configurações",
        text: "No ícone de engrenagem <strong>⚙</strong> você gerencia preferências, segurança e sua sessão.",
        btnText: "Entendi!"
      }
    ],

    cliente: [
      {
        title: "🛍️ Bem-vindo(a) ao Moda Center!",
        text: "Aqui você encontra ofertas diretamente das lojas cadastradas. Vamos conferir como explorar a plataforma?",
        btnText: "Próximo"
      },
      {
        title: "✨ Studio de Estilo & IA",
        text: "Acesse <strong>Montar look com IA</strong> para combinações personalizadas ou use o <strong>Espelho Mágico</strong> para visualizar as peças.",
        btnText: "Próximo"
      },
      {
        title: "🔎 Catálogo de Produtos",
        text: "Utilize a barra de pesquisa para buscar roupas e acessórios, ver detalhes dos itens e adicioná-los ao carrinho.",
        btnText: "Próximo"
      },
      {
        title: "🛒 Pedidos e Navegação",
        text: "Acompanhe seus itens no <strong>Carrinho</strong>, veja o histórico em <strong>Minhas compras</strong> e fale com as lojas pelo <strong>Chat</strong>.",
        btnText: "Boas compras!"
      }
    ],

    inicio: [
      {
        title: "👋 Bem-vindo(a), Comerciante!",
        text: "Este é o seu painel central no Moda Center. A partir daqui você tem acesso rápido ao gerenciamento da sua loja.",
        btnText: "Próximo"
      },
      {
        title: "👕 Seus Produtos e Pedidos",
        text: "Na seção <strong>Seus produtos</strong> você visualiza seu catálogo e acessa os <strong>Pedidos dos clientes</strong>.",
        btnText: "Próximo"
      },
      {
        title: "⚡ Atalhos Rápidos",
        text: "Utilize os atalhos para <strong>Cadastrar novo produto</strong>, filtrar categorias ou gerenciar seu estoque.",
        btnText: "Próximo"
      },
      {
        title: "🧭 Menu Inferior",
        text: "Navegue entre <strong>Início</strong>, <strong>Chat</strong>, <strong>Marketing</strong> e <strong>Perfil</strong>.",
        btnText: "Começar!"
      }
    ]
  };

  const faqDatabase = {
    cliente: [
      {
        q: "Como faço para acompanhar meu pedido?",
        a: "Acesse <strong>Minhas compras</strong> no menu inferior para consultar o status dos seus pedidos."
      },
      {
        q: "Como entrar em contato com um comerciante?",
        a: "Na página do produto ou no menu de navegação, clique em <strong>Conversas / Chat</strong> para falar com a loja."
      },
      {
        q: "Quais as formas de recebimento dos produtos?",
        a: "No momento da compra, verifique as opções disponíveis, como <strong>retirada na loja</strong> ou <strong>entrega</strong>."
      },
      {
        q: "Como funciona o Espelho Mágico?",
        a: "Na área de compras, acesse o <strong>Espelho Mágico</strong> para visualizar combinações de peças disponíveis na plataforma."
      }
    ],

    comerciante: [
      {
        q: "Como cadastrar novos produtos na minha loja?",
        a: "Clique no botão <strong>+</strong> ou acesse o menu de cadastro. Preencha nome, valor, foto, estoque e variações do produto."
      },
      {
        q: "Como ativar preços para vendas no atacado?",
        a: "Na tela de cadastrar ou editar produto, marque <strong>Vendo este produto no atacado</strong> e informe a quantidade mínima e o preço."
      },
      {
        q: "Como criar promoções na Central de Marketing?",
        a: "Vá para <strong>Marketing</strong>, selecione <strong>Promoções</strong> ou <strong>Ofertas Relâmpago</strong> e configure a campanha."
      },
      {
        q: "Como alterar Setor, Rua e Box da loja?",
        a: "Acesse <strong>Perfil</strong>, clique em <strong>Editar meu perfil</strong> e atualize os dados de localização."
      }
    ]
  };

  function getPageKey() {
    const path = window.location.pathname.toLowerCase();

    if (path.includes("produto-novo")) return "produto";
    if (path.includes("marketing")) return "marketing";
    if (path.includes("chat")) return "chat";
    if (path.includes("perfil_cliente") || path.includes("cliente")) return "cliente";
    if (path.includes("perfil")) return "perfil";
    if (path.includes("inicio_comerciante")) return "inicio";

    return null;
  }

  function initAssistantWidget() {
    if (document.getElementById("assistant-container")) return;

    // Detecta se a rota é de cliente ou comerciante
    const isCliente = window.location.pathname.toLowerCase().includes("cliente");
    let currentCategory = isCliente ? "cliente" : "comerciante";

    const container = document.createElement("div");
    container.id = "assistant-container";

    container.innerHTML = `
      <div id="assistant-box" class="hidden" role="dialog" aria-label="Central de ajuda">
        <div class="assistant-header">
          <span>🤖 Guia Moda Center (${isCliente ? "Cliente" : "Comerciante"})</span>
          <button type="button" id="close-btn" aria-label="Fechar ajuda">&times;</button>
        </div>

        <div class="assistant-body">
          <input
            type="search"
            id="faqSearch"
            class="assistant-search-input"
            placeholder="🔍 Buscar dúvida ou problema..."
            autocomplete="off"
            aria-label="Buscar dúvida"
          >

          <div id="faqList" aria-live="polite"></div>
        </div>
      </div>

      <button type="button" id="assistant-avatar" aria-label="Abrir Guia Moda Center" aria-expanded="false">
        <span aria-hidden="true">🤖</span>
      </button>
    `;

    document.body.appendChild(container);

    const box = container.querySelector("#assistant-box");
    const avatar = container.querySelector("#assistant-avatar");
    const closeBtn = container.querySelector("#close-btn");
    const searchInput = container.querySelector("#faqSearch");
    const listContainer = container.querySelector("#faqList");

    function renderFAQ(filterText = "") {
      const filter = filterText.trim().toLowerCase();

      listContainer.replaceChildren();

      const items = (faqDatabase[currentCategory] || []).filter(item =>
        `${item.q} ${item.a}`.toLowerCase().includes(filter)
      );

      if (!items.length) {
        const empty = document.createElement("p");
        empty.className = "assistant-empty";
        empty.textContent = "Nenhuma dúvida encontrada.";
        listContainer.appendChild(empty);
        return;
      }

      items.forEach(item => {
        const faqItem = document.createElement("div");
        faqItem.className = "faq-item";

        const question = document.createElement("button");
        question.type = "button";
        question.className = "faq-question";
        question.innerHTML = `
          <span>${item.q}</span>
          <span class="faq-arrow" aria-hidden="true">▼</span>
        `;

        const answer = document.createElement("div");
        answer.className = "faq-answer";
        answer.innerHTML = item.a;
        answer.hidden = true;

        question.setAttribute("aria-expanded", "false");

        question.addEventListener("click", () => {
          const isOpen = faqItem.classList.toggle("open");
          answer.hidden = !isOpen;
          question.setAttribute("aria-expanded", String(isOpen));
        });

        faqItem.append(question, answer);
        listContainer.appendChild(faqItem);
      });
    }

    function openAssistant() {
      box.classList.remove("hidden");
      avatar.setAttribute("aria-expanded", "true");
      renderFAQ(searchInput.value);
    }

    function closeAssistant() {
      box.classList.add("hidden");
      avatar.setAttribute("aria-expanded", "false");
    }

    avatar.addEventListener("click", () => {
      box.classList.contains("hidden") ? openAssistant() : closeAssistant();
    });

    closeBtn.addEventListener("click", closeAssistant);

    searchInput.addEventListener("input", event => {
      renderFAQ(event.target.value);
    });

    document.addEventListener("keydown", event => {
      if (event.key === "Escape" && !box.classList.contains("hidden")) {
        closeAssistant();
      }
    });

    renderFAQ();
  }

  function initTutorialSystem(steps) {
    const tutorialModal = document.getElementById("tutorialModal");

    if (!tutorialModal || !Array.isArray(steps) || steps.length === 0) return;

    const tutorialTitle = document.getElementById("tutorialTitle");
    const tutorialText = document.getElementById("tutorialText");
    const nextTutorialBtn = document.getElementById("nextTutorialBtn");
    const skipTutorialBtn = document.getElementById("skipTutorialBtn");
    const indicator = tutorialModal.querySelector(".tutorial-steps-indicator");

    if (!tutorialTitle || !tutorialText || !nextTutorialBtn) return;

    let currentStep = 0;

    if (indicator) {
      indicator.replaceChildren();

      steps.forEach((_, index) => {
        const dot = document.createElement("span");
        dot.className = "step-dot";
        dot.dataset.step = String(index + 1);
        indicator.appendChild(dot);
      });
    }

    function updateStepView() {
      const step = steps[currentStep];

      tutorialTitle.innerHTML = step.title;
      tutorialText.innerHTML = step.text;
      nextTutorialBtn.textContent = step.btnText;

      if (indicator) {
        indicator.querySelectorAll(".step-dot").forEach((dot, index) => {
          dot.classList.toggle("active", index === currentStep);
        });
      }
    }

    function closeTutorial() {
      tutorialModal.style.display = "none";
      tutorialModal.setAttribute("aria-hidden", "true");
    }

    function nextStep() {
      if (currentStep < steps.length - 1) {
        currentStep += 1;
        updateStepView();
      } else {
        closeTutorial();
      }
    }

    nextTutorialBtn.onclick = nextStep;

    if (skipTutorialBtn) {
      skipTutorialBtn.onclick = closeTutorial;
    }

    tutorialModal.onclick = event => {
      if (event.target === tutorialModal) {
        closeTutorial();
      }
    };

    tutorialModal.setAttribute("aria-hidden", "false");
    tutorialModal.style.display = "flex";
    updateStepView();
  }

  function init() {
    initAssistantWidget();

    const pageKey = getPageKey();
    if (pageKey && TUTORIALS[pageKey]) {
      initTutorialSystem(TUTORIALS[pageKey]);
    }
  }

  // Única inicialização do assistente.
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init, { once: true });
  } else {
    init();
  }

  // Mantém a base disponível para outros scripts, se necessário.
  window.ModacenterAssistant = {
    faqDatabase,
    tutorials: TUTORIALS
  };
})();