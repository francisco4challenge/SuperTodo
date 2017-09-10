# language: pt
Funcionalidade: Apagar tarefa
    Para ser possivel organizar melhor o meu dia
    Como utilizador
    Eu quero poder apagar tarefas

# Critérios de aceitação:
#   Uma tarefa tem: 
#     - Título (texto)
#     - Descrição (texto)
#     - Estado (multivalor: "Concluida", "Por fazer")
Cenário: Apagar tarefa
    Dado que existe a seguinte tarefa
    | Título          | Descrição    | Estado    |
    | Fazer a barba   | Com jeitinho | Por fazer |
    Quando o Jojo carrega no botão para apagar a tarefa
    Então o Jojo já não vai ver a tarefa que apagou
    | Título          | Descrição    | Estado    |
    | Fazer a barba   | Com jeitinho | Por fazer |