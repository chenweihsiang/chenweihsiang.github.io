---
title: "Research"
layout: single
classes: wide
permalink: /research/
author_profile: true
---

## Working Paper & Work in Progress

- **Inferring Treatment Effects in Large Panels by Uncovering Latent Similarities**\
***arXiv Working paper*, 2025;** [[web link](https://arxiv.org/abs/2306.14862)]\
<a href="https://bendeaner.wordpress.com/" style="color: #2E3440; text-decoration: none;">Ben Deaner</a>, <ins>Chen-Wei Hsiang</ins>, <a href="https://www.azeleneev.com/" style="color: #2E3440; text-decoration: none;">Andrei Zeleneev</a>\
**Abstract:** The presence of unobserved confounders is one of the main challenges in identifying treatment effects. In this paper, we propose a new approach to causal inference using panel data with large N and T. Our approach imputes the untreated potential outcomes for treated units using the outcomes for untreated individuals with similar values of the latent confounders. In order to find units with similar latent characteristics, we utilize long pre-treatment histories of the  outcomes. Our analysis is based on a nonparametric, nonlinear, and nonseparable factor model for untreated potential outcomes and treatments. The model satisfies minimal smoothness requirements. We impute both missing counterfactual outcomes and propensity scores using kernel smoothing based on the constructed measure of latent similarity between units, and demonstrate that our estimates can achieve the optimal nonparametric rate of convergence up to log terms. Using these estimates, we construct a doubly robust estimator of the period-specifc average treatment effect on the treated (ATT), and provide conditions, under which this estimator is root-N-consistent, and asymptotically normal and unbiased. Our simulation study demonstrates that our method provides accurate inference for a wide range of data generating processes.
- **Event Study with Time-Adjusted Synthetic Control**


## Publication

- **Causal Random Forests Model Using Instrumental Variable Quantile Regression**\
***Econometrics*, 2019, 7(4), 1-22;** [[web link](https://doi.org/10.3390/econometrics7040049)]\
<a href="https://jauerblog.wordpress.com/cv_en/" style="color: #2E3440; text-decoration: none;">Jau-er Chen</a>, <ins>Chen-Wei Hsiang</ins>\
**Abstract:** We propose an econometric procedure based mainly on the generalized random forests method. Not only does this process estimate the quantile treatment effect nonparametrically, but our procedure yields a measure of variable importance in terms of heterogeneity among control variables. We also apply the proposed procedure to reinvestigate the distributional effect of 401(k) participation on net financial assets, and the quantile earnings effect of participating in a job training program.


## Code

- **PanelIFE** [[GitHub link](https://github.com/chenweihsiang/PanelIFE)]\
R package for *"Robust Estimation and Inference in Panels with Interactive Fixed Effects (Armstrong, Weidner, and Zeleneev, 2024) [[web link](https://arxiv.org/abs/2210.06639)]"*\
**Abstract:** PanelIFE implements the estimation and inference procedure for panel data with interactive fixed effects. This package provides two different method for estimation: one is the commonly used linear panel data model estimation procedure, and another one is the bias-aware estimation procedure that allows weak factors.



<br/>



<sub><sup>*(Last updated: April 2025)*</sup></sub>
