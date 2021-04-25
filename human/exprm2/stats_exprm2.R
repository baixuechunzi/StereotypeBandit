
# from jupyter transformed dataset

###################################

# Study2.
setwd(".../exprm2")
dt <- read.csv('study2transformed.csv')
# relevel
dt <- within(dt, condition <- relevel(condition, ref = "self_select"))
# model
summary(lm(choice_herf ~ condition,data=dt))
summary(lm(reward_var ~ condition,data=dt))
cor.test(dt$choice_herf,dt$reward_var)

###################################