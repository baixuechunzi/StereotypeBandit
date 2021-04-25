# from jupyter transformed dataset

###################################
# Study1.
setwd(".../exprm1")
dt <- read.csv('study1transformed.csv')

# Primary analysis - identical reward and no prior bias
primdt_a <- dt[which(dt$reward=='identical' & dt$bias=='no'),]
summary(lm(choice_herf ~ sampling,data=primdt_a))
summary(lm(reward_var ~ sampling,data=primdt_a))
cor.test(primdt_a$choice_herf,primdt_a$reward_var)

# Primary analysis - identical reward but with prior bias
primdt_b <- dt[which(dt$reward=='identical' & dt$bias=='yes'),]
summary(lm(choice_herf ~ sampling,data=primdt_b))
summary(lm(reward_var ~ sampling,data=primdt_b))
cor.test(primdt_b$choice_herf,primdt_b$reward_var)

# Secondary analysis - different reward and no prior bias
secodt_a <- dt[which(dt$reward=='different' & dt$bias=='no'),]
summary(lm(choice_herf ~ sampling,data=secodt_a))
summary(lm(reward_var ~ sampling,data=secodt_a))
cor.test(secodt_a$choice_herf,secodt_a$reward_var)

# Secondary analysis - different reward but with prior bias
secodt_b <- dt[which(dt$reward=='different' & dt$bias=='no'),]
summary(lm(choice_herf ~ sampling,data=secodt_b))
summary(lm(reward_var ~ sampling,data=secodt_b))
cor.test(secodt_b$choice_herf,secodt_b$reward_var)


###################################
