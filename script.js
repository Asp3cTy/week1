// script.js

// Exemplo: Adicionar uma mensagem no console para confirmar que o JS está funcionando
console.log("Página CS50 Semana 0 carregada!");

// --- Futuras Funcionalidades (Exemplos) ---

// // Exemplo: Tornar seções expansíveis/colapsáveis
// document.addEventListener('DOMContentLoaded', () => {
//     const sectionTitles = document.querySelectorAll('main section h2');
//     sectionTitles.forEach(title => {
//         title.style.cursor = 'pointer'; // Indica que é clicável
//         title.addEventListener('click', () => {
//             const content = title.nextElementSibling; // Assume que o conteúdo vem logo após o h2
//             // Ou encontrar o conteúdo de forma mais robusta se a estrutura mudar
//             if (content) {
//                 content.style.display = content.style.display === 'none' ? 'block' : 'none';
//                 // Adicionar uma classe para animação ou indicador visual (ex: seta)
//                 title.classList.toggle('collapsed');
//             }
//         });

//         // Opcional: Começar com algumas seções recolhidas
//         // if (title.parentElement.id !== 'introducao') { // Deixa a intro aberta
//         //     title.click(); // Simula um clique para recolher
//         // }
//     });
// });

// // Exemplo: Botão "Copiar" para blocos de código <pre>
// document.querySelectorAll('pre').forEach(preElement => {
//     const button = document.createElement('button');
//     button.innerText = 'Copiar';
//     button.classList.add('copy-button'); // Adicionar estilo CSS para .copy-button
//     preElement.style.position = 'relative'; // Necessário para posicionar o botão
//     preElement.appendChild(button);

//     button.addEventListener('click', () => {
//         const code = preElement.querySelector('code').innerText;
//         navigator.clipboard.writeText(code).then(() => {
//             button.innerText = 'Copiado!';
//             setTimeout(() => { button.innerText = 'Copiar'; }, 2000); // Volta ao normal
//         }).catch(err => {
//             console.error('Erro ao copiar código: ', err);
//             // Tratar erro ou feedback visual alternativo
//         });
//     });
// });

// Adicionar estilo para .copy-button no style.css se usar este código:
/*
.copy-button {
    position: absolute;
    top: 10px;
    right: 10px;
    padding: 5px 8px;
    background-color: var(--secondary-color);
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    opacity: 0.7;
    transition: opacity 0.2s;
}
pre:hover .copy-button {
    opacity: 1;
}
.copy-button:active {
    background-color: var(--primary-color);
}
*/