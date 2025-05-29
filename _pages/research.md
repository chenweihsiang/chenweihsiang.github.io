---
title: "Research"
layout: single
classes: wide
permalink: /research/
author_profile: true
---

<html>
<head>
<style>
.collapsible {padding: 0.5em; background-color: #D8DEE9; border: none; border-radius: 0.3em; text-align: left; font-size: 0.8em; font-weight: bold; margin: 0.5em 0; position: relative; left: 0em;}
.content {padding: 0 0.4em; max-height: 0; overflow: hidden; transition: max-height 0.2s ease-out; background-color: transparent; font-size: 0.8em; margin-bottom: 0.75em; position: relative; left: 0em;}
</style>
</head>

<!-- -------------------------------------- -->

<body>

<h2>Working Paper & Work in Progress</h2>

<ul>
<li>
<strong>Inferring Treatment Effects in Large Panels by Uncovering Latent Similarities</strong><br/>
<strong><em>arXiv working paper</em>, 2025; </strong>[<a href="https://arxiv.org/abs/2503.20769/" style="color: currentColor;">web link</a>]<br/>
<a href="https://bendeaner.wordpress.com/" style="color: currentColor; text-decoration: none;">Ben Deaner</a>, <ins>Chen-Wei Hsiang</ins>, <a href="https://www.azeleneev.com/" style="color: #2E3440; text-decoration: none;">Andrei Zeleneev</a><br/>
<button class="collapsible">Abstract</button>
<div class="content">
The presence of unobserved confounders is one of the main challenges in identifying treatment effects. In this paper, we propose a new approach to causal inference using panel data with large N and T. Our approach imputes the untreated potential outcomes for treated units using the outcomes for untreated individuals with similar values of the latent confounders. In order to find units with similar latent characteristics, we utilize long pre-treatment histories of the  outcomes. Our analysis is based on a nonparametric, nonlinear, and nonseparable factor model for untreated potential outcomes and treatments. The model satisfies minimal smoothness requirements. We impute both missing counterfactual outcomes and propensity scores using kernel smoothing based on the constructed measure of latent similarity between units, and demonstrate that our estimates can achieve the optimal nonparametric rate of convergence up to log terms. Using these estimates, we construct a doubly robust estimator of the period-specifc average treatment effect on the treated (ATT), and provide conditions, under which this estimator is root-N-consistent, and asymptotically normal and unbiased. Our simulation study demonstrates that our method provides accurate inference for a wide range of data generating processes.
</div>
</li>
<li>
<strong>Event Study with Time-Adjusted Synthetic Control</strong>
</li>
</ul>

<!-- -------------------------------------- -->

<h2>Publication</h2>

<ul>
<li>
<strong>Causal Random Forests Model Using Instrumental Variable Quantile Regression</strong><br/>
<strong><em>Econometrics</em>, 2019, 7(4), 1-22; </strong>[<a href="https://doi.org/10.3390/econometrics7040049" style="color: #5E81AC;">web link</a>]<br/>
<a href="https://jauerblog.wordpress.com/cv_en/" style="color: #2E3440; text-decoration: none;">Jau-er Chen</a>, <ins>Chen-Wei Hsiang</ins><br/>
<button class="collapsible">Abstract</button>
<div class="content">
We propose an econometric procedure based mainly on the generalized random forests method. Not only does this process estimate the quantile treatment effect nonparametrically, but our procedure yields a measure of variable importance in terms of heterogeneity among control variables. We also apply the proposed procedure to reinvestigate the distributional effect of 401(k) participation on net financial assets, and the quantile earnings effect of participating in a job training program.
</div>
</li>
</ul>

<!-- -------------------------------------- -->

<h2>Code</h2>

<ul>
<li>
<strong>PanelIFE</strong> [<a href="https://github.com/chenweihsiang/PanelIFE" style="color: #5E81AC;">GitHub link</a>]<br/>
R package for <em>"Robust Estimation and Inference in Panels with Interactive Fixed Effects (Armstrong, Weidner, and Zeleneev, 2024) [<a href="https://arxiv.org/abs/2210.06639" style="color: #5E81AC;">web link</a>]"</em><br/>
<button class="collapsible">Description</button>
<div class="content">
PanelIFE implements the estimation and inference procedure for panel data with interactive fixed effects. This package provides two different method for estimation: one is the commonly used linear panel data model estimation procedure, and another one is the bias-aware estimation procedure that allows weak factors.
</div>
</li>
</ul>

<!-- -------------------------------------- -->

<script>var coll = document.getElementsByClassName("collapsible"); var i; for (i = 0; i < coll.length; i++) { coll[i].addEventListener("click", function() { this.classList.toggle("active"); var content = this.nextElementSibling; if (content.style.maxHeight){ content.style.maxHeight = null; } else { content.style.maxHeight = content.scrollHeight + "px"; } }); }</script>
</body>
</html>





<br/>



<sub><sup>*(Last updated: May 2025)*</sup></sub>
