# -D3Challenge
Foi desenvolvido uma API com os dados dos respectivos dias pegados dos gráficos dados

Detalhes técnicos: 
foi usado o express para criar o server, 
foi criado um servidor com a função de requisição e resposta(Consulta API) 
foi criado um conjunto de dados para ser verificado ao passar o ID

Como testar a aplicação? 
deve-se baixar um  API client para  testar a aplicação, recomendo duas: Postaman ou Insomnia, ou simplesmente pode testar usando o endereço:  
configurar no Método GET e inserir a API: 
      http://localhost:5000/ID
      ID = dia, irá retornar a taxa de letalidade dos números de infectados e respectivas mortes em dias futuros
      exemplo: 
      http://localhost:5000/ddf/DIA


A aplicação foi desenvolvida em NODE, terá que baixar ás dependencias das ferramentas usadas: 
npm install //  yarn start

foi desenvolvido um painel em HTML consumido pelo método fetch

Front-end básico: 
Foram corrigidos os erros de input, com o bloqueio de caracteres especiais, 
Link do que eu usei para verificar as keys bloqueadas: https://keycode.info/
somente um painel básico para testar a API via html, é bem mais rápido e agil do que testar o código no terminal ou Insomnia/Postman ;)

## entendo um pouco sobre terminologia: 

# Uma característica importante de uma doença infecciosa, particularmente aquela causada por um novo patógeno como oSARS-CoV-2, 
é sua gravidade, cuja medida final é sua capacidade de causar a morte. As taxas de mortalidade nos ajudam a entender a gravidade 
de uma doença, identificar populações em risco e avaliar a qualidade dos cuidados de saúde.

Existem duas medidas usadas para avaliar a proporção de indivíduos infectados com desfecho fatal. O primeiro é a taxa de mortalidade por infecção (Infection Fatality Ratio – IFR, em inglês), que estima a proporção de mortes em meio a todos os indivíduos 
infectados. O segundo é a taxa de letalidade (Case Fatality Ratio – CFR, em inglês), que estima a proporção de mortes em meio 
aos casos confirmados identificados.

Para medir a IFR com precisão, deve-se ter conhecimento do quadro completo do número de infecções e mortes causadas pela doença. Consequentemente, neste estágio inicial da pandemia, a maioria das estimativas das taxas de mortalidade se baseou nos casos 
detectados por meio de vigilância e foi calculada usando métodos brutos, dando origem a estimativas amplamente variáveis da CFR 
por país: desde menos de 0,1% a mais de 25%.

# Premissa 2: Todos os casos detectados foram resolvidos (ou seja, os casos relatados se recuperaram ou morreram)

O acrônimo CFR, conforme aplicado à mensuração do número de mortes em meio a todas as pessoas com uma determinada doença,
é mais comumente chamado de “taxa de letalidade”, embora estritamente falando esse termo esteja incorreto porque o termo “taxa”
é usado para denotar um componente de tempo, que está ausente na CFR. Alguns autores tentaram retificar essa incoerência usando
o termo proporção de fatalidade de caso, ou razão de fatalidade de caso, que não é limitado pelo fato de o numerador ser um subconjunto do denominador (ou seja, a definição de uma proporção). O termo “risco de fatalidade de caso”, usado mais raramente, só é correto se a duração da doença clínica for conhecida. Para os fins deste documento, usaremos o termo “taxa de letalidade”.

Durante uma epidemia em curso, alguns dos casos ativos já detectados podem subsequentemente vir a falecer, levando à subestimação da CFR estimada antes da morte deles. Esse efeito é acentuado nas epidemias de crescimento rápido (por exemplo, durante 
a fase de crescimento exponencial da COVID-19)

# Como calcular a CFR durante uma epidemia em curso


A CFR calculada usando a fórmula acima durante epidemias em andamento fornece uma estimativa condicional da CFR e é influenciada por atrasos nas datas de notificação de casos e mortes. Isso leva a uma ampla variação nas estimativas da CFR ao longo de uma epidemia, que tende a uma estimativa final estável da CFR à medida que os casos ativos são resolvidos

Uma solução simples para mitigar o viés resultante do atraso na resolução dos casos durante um surto em andamento é restringir a 
análise aos casos resolvidos:

Taxa de letalidade (CFR, em %) = (Números de mortes pela doença / Número de mortes pela doença + Números de recuperados pela doença) x 100

No entanto, esse método não elimina todos os vieses relacionados a notificações atrasadas.



# Artigo base: https://iris.paho.org/bitstream/handle/10665.2/52650/OPASWBRACOVID-1920110_por%20%281%29.pdf?sequence=1&isAllowed=y
# https://www.news-medical.net/health/What-is-Case-Fatality-Rate-(CFR)-(Portuguese).aspx

# Referências bibliográficas: 
1. Kim G-U, Kim M-J, Ra SH, Lee J, Bae S, Jung J, et al. Clinical characteristics of asymptomatic and symptomatic patients with mild 
COVID-19. Clin Microbiol Infect. 2020;26: 948.e1–948.e3.
2. Nishiura H, Kobayashi T, Miyama T, Suzuki A, Jung S-M, Hayashi K, et al. Estimation of the asymptomatic ratio of novel coronavirus 
infections (COVID-19). Int J Infect Dis. 2020;94: 154–155.
3. Lau H, Khosrawipour T, Kocbach P, Ichii H, Bania J, Khosrawipour V. Evaluating the massive underreporting and undertesting of 
COVID-19 cases in multiple global epicenters. Pulmonology. 2020. doi:10.1016/j.pulmoe.2020.05.015
4. Niehus R, De Salazar PM, Taylor AR, Lipsitch M. Using observational data to quantify bias of traveller-derived COVID- 19 prevalence 
estimates in Wuhan, China. Lancet Infect Dis. 2020;20: 803–808.
5. Organização Mundial de Saúde. Vigilância global para COVID-19 causada por infecção humana com o vírus COVID-19. Disponível 
em: https://www.who.int/publications/i/item/global-surveillance-for-covid-19-caused-by-human-infection- with-covid-19-virus-interimguidance
6. Organização Mundial da Saúde. Diretrizes internacionais para certificação e classificação (codificação) de COVID-19 como causa de 
morte. Disponível em: https://www.who.int/classifications/icd/Guidelines_Cause_of_Death_COVID-19.pdf?ua=1
7. Metcalf CJE, Farrar J, Cutts FT, Basta NE, Graham AL, Lessler J, et al. Use of serological surveys to generate key insights into the 
changing global landscape of infectious disease. Lancet. 2016;388: 728–730
8. Kritsotakis E. On the Importance of Population-Based Serological Surveys of SARS-CoV-2 Without Overlooking Their Inherent 
Uncertainties. doi:10.20944/preprints202005.0194.v1.
9. https://www.who.int/emergencies/diseases/novel-coronavirus-2019/serology-in-the-context-of-covid-19
10. Perez-Saez FJ, Lauer SA, Kaiser L, Regard S, Delaporte E, Guessous I, et al. Serology-informed estimates of SARS- CoV-2 infection 
fatality risk in Geneva, Switzerland. Lancet Infect Dis doi:10.1016/S1473-3099(20)30584-3
11. Stringhini S, Wisniak A, Piumatti G, Azman AS, Lauer SA, Baysson H, et al. Seroprevalence of anti-SARS-CoV-2 IgG antibodies in 
Geneva, Switzerland (SEROCoV-POP): a population-based study. Lancet. 2020. doi:10.1016/S0140- 6736(20)31304-0.
12. The infection fatality rate of COVID-19 in Stockholm – Technical report. Disponível em: https://www.folkhalsomyndigheten.se/
contentassets/53c0dc391be54f5d959ead9131edb771/infection-fatality-rate-covid- 19-stockholm-technical-report.pdf
13. Nishiura H, Klinkenberg D, Roberts M, Heesterbeek JA. Early epidemiological assessment of the virulence of emerging infectious 
diseases: a case study of an influenza pandemic. PLoS One. 2009;4(8):e6852. Published 2009 Aug 31. doi:10.1371/journal.
pone.0006852.
14. Ghani AC, Donnelly CA, Cox DR, Griffin JT, Fraser C, Lam TH, et al. Methods for estimating the case fatality ratio for a novel, 
emerging infectious disease. Am J Epidemiol. 2005;162: 479–486.
15. Lipsitch M, Donnelly CA, Fraser C, Blake IM, Cori A, Dorigatti I, et al. Potential Biases in Estimating Absolute and Relative CaseFatality Risks during Outbreaks. PLOS Neglected Tropical Diseases. 2015. p. e0003846. doi:10.1371/journal.pntd.0003846.
16. Gold MS, Sehayek D, Gabrielli S, Zhang X, McCusker C, Ben-Shoshan M. COVID-19 and comorbidities: a systematic review and 
meta-analysis. Postgrad Med. 2020; 1–7.
17. Jain V, Yuan J-M. Predictive symptoms and comorbidities for severe COVID-19 and intensive care unit admission: a systematic review 
and meta-analysis. Int J Public Health. 2020;65: 533–546.
18. Pan D, Sze S, Minhas JS, Bangash MN, Pareek N, Divall P, et al. The impact of ethnicity on clinical outcomes in COVID-19: A 
systematic review. EClinicalMedicine. 2020;23: 100404.
19. Angelopoulos A, Pathak R, Varma R, Jordan MI. Identifying and Correcting Bias from Time- and Severity- Dependent Reporting Rates 
in the Estimation of the COVID-19 Case Fatality Rate. SSRN Electronic Journal. doi:10.2139/ssrn.3556644.
A OMS continua a monitorar a situação de perto para identificar quaisquer mudanças que possam afetar esta orientação provisória. 
Se houver mudança em algum dos fatores, a OMS publicará uma atualização. Caso contrário, este documento de informe científico 
expirará 2 anos após sua data de publicação

© Organização Pan-Americana da Saúde 2020. 
Alguns direitos reservados. Esta obra está disponível sob a licença: https://creativecommons.org/licenses/by-nc-sa/3.0/igo
Número de referência: OPAS-W/BRA/COVID-19/20-11

