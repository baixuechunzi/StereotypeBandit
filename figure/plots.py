import numpy as np
import matplotlib.pyplot as plt
import scipy.stats as ss


'''
Figure 1 (social bandits)
'''
plt.style.use('fivethirtyeight')
plt.rcParams['figure.figsize'] = (12,8)

def plot_beta(x_range, a,b,mu=0, sigma=1, cdf=False, **kwargs):
    x = x_range
    if cdf:
        y = ss.beta.cdf(x,a,b,mu,sigma)
    else:
        y = ss.beta.pdf(x,a,b,mu,sigma)
    plt.plot(x,y,**kwargs)

x=np.linspace(0,1,5000)

plot_beta(x,20+1,1+1,0,1,color='red',lw=4, ls='-', alpha=0.7)
plot_beta(x,7+1,2+1,0,1,color='green',lw=4, ls='-', alpha=0.7)
plot_beta(x,4+1,3+1,0,1,color='orange',lw=4, ls='-', alpha=0.7)
plot_beta(x,1+1,2+1,0,1,color='blue',lw=4, ls='-', alpha=0.7)
plt.ylabel('probability distribution')
plt.xlabel('probability')
plt.axvline(x=0.9, ls=':', lw=4, color='black')
plt.show()


'''
Figure 2 (simulation bandits)
see TS simulation.py
'''


'''
Figure 3 (study 1 empirical data)
see Experiment1.py
'''


'''
Figure 4 (study 2 empirical data)
see Experiment2.py
'''