# language: pt
Funcionalidade: Apagar todas as tarefas
    Para ser possivel organizar melhor o meu dia
    Como utilizador
    Eu quero poder apagar as tarefas

# Critérios de aceitação:
#   Uma tarefa tem: 
#     - Título (texto)
#     - Descrição (texto)
#     - Estado (multivalor: "Concluida", "Por fazer")
Cenário: Apagar tarefas
    Dados os seguintes dados
    | Título          | Descrição    | Estado    |
    | Fazer a barba   | Com jeitinho | Por fazer |
    | Lavar os dentes | Com jeitinho | Por fazer |
    Quando o Jojo carrega no botão para destuir as tarefas
    Então o Jojo já não vai ter tarefas
