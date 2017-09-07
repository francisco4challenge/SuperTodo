# language: pt
Funcionalidade: Ver tarefas
    Para ser possivel organizar melhor o meu dia
    Como utilizador
    Eu quero poder ver as minhas tarefas

# Critérios de aceitação:
#   Uma tarefa tem: 
#     - Título (texto)
#     - Descrição (texto)
#     - Estado (multivalor: "Concluida", "Por fazer")
Cenário: Ver as minhas tarefas
    Dadas que existem as seguintes tarefas
    | Título        | Descrição    | Estado    |
    | Fazer a barba | Com jeitinho | Por fazer |
    Quando o Jojo vai à página das tarefas 
    Então o Jojo deve ver as tarefas
    | Título        | Descrição    | Estado    |
    | Fazer a barba | Com jeitinho | Por fazer |