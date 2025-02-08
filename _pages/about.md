---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>

# About Me

I am a final-year undergraduate majoring in Electronic and Information Engineering at [The Hong Kong Polytechnic University (PolyU)](https://www.polyu.edu.hk/). I am honored to be supervised by [Prof. Kenneth Kin-Man Lam](https://scholar.google.com.hk/citations?user=6yK7bewAAAAJ) and collaborate closely with [Dr. Jun Xiao](https://junxiao01.github.io/) on 3D vision. I am also grateful for the mentorship of [Prof. Wenjing Jia](https://scholar.google.com.au/citations?hl=en&user=BzXhftkAAAAJ) at [UTS](https://www.uts.edu.au/) (Sydney) on an international project focused on OCT image processing for medical imaging in 2024.

My research interest includes computer vision and 3D reconstruction (e.g., image processing, novel view synthesis). I am also actively learning generative models.

I am also a photography lover—[check out my selected photos here](photowall/photowall.html)!
<!--Google citation: <a href='https://scholar.google.com/citations?user=kH0sdkwAAAAJ'><img src="https://img.shields.io/endpoint?logo=Google%20Scholar&url=https%3A%2F%2Fcdn.jsdelivr.net%2Fgh%2FYushenZuo%2Fyushenzuo.github.io@google-scholar-stats%2Fgs_data_shieldsio.json&labelColor=f6f6f6&color=9cf&style=flat&label=citations"></a> -->




# 🔥 News

- *2025.01*: &nbsp;🎉🎉 Our paper on enhancing 3D Gaussian splatting for novel view synthesis is submitted to **IEEE Transactions on Visualization and Computer Graphics (TVCG)**.

- *2025.01*: &nbsp;🎉🎉 Our paper **MFGAN: OCT Image Super-resolution and Enhancement with Blind Degradation and Multi-frame Fusion** has been awarded the **Best Paper Award** at **IWAIT 2025**.

- *2024.12*: &nbsp;🎉🎉 Our paper **See In Detail: Enhancing Sparse-view 3D Gaussian Splatting with Local Depth and Semantic Regularization** is accepted by **ICASSP 2025**. 
<!--on enhancing 3D Gaussian splatting for novel view synthesis under sparse views-->

- *2024.12*: &nbsp;🎉🎉 Awarded **The Hong Kong Polytechnic University Scholarship** among a group of ~20 awardees!

- *2024.08*: &nbsp;🎉🎉 2nd place in <a href='https://codalab.lisn.upsaclay.fr/competitions/17705'>AIM 2024 Challenge on Efficient Video Super-Resolution for AV1 Compressed Content</a> **in ECCV 2024** and our method **Fast Sequential Motion Diffusion (FSMD)** is selected to present in the [summary paper](https://arxiv.org/pdf/2409.17256).

- *2024.08*: &nbsp;🎉🎉 3rd place in <a href='https://codalab.lisn.upsaclay.fr/competitions/19222'>AIM 2024 Challenge on Sparse Neural Rendering for Track 1 and Track 2</a> **in ECCV 2024** and our method **ESNeRF** is selected to present in the [summary paper](https://arxiv.org/pdf/2409.15045).

- *2024.12*: &nbsp;🎉🎉 Our paper **A Multi-Perceptual Learning Network for Retina OCT Image Denoising and Classification** is presented as an oral presentation at **APSIPA 2024**.


# 📝 Publications 


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ICASSP 2025</div><img src='images/ICASSP_2025.png' alt="sym" width="80%"></div></div>
<div class='paper-box-text' markdown="1">
**See In Detail: Enhancing Sparse-view 3D Gaussian Splatting with Local Depth and Semantic Regularization**
  
Zongqi He<sup>*</sup>, **Zhe Xiao**<sup>*</sup>, Kin-Chung Chan, Yushen Zuo, Jun Xiao, Kin-Man Lam

<sup>*</sup>Equal Contribution

**ICASSP 2025**

[\[paper\]](https://arxiv.org/abs/2501.11508) [\[code\]](https://github.com/wuyou012/SIDGaussian)

</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">APSIPA 2024</div><img src='images/APSIPA2024.png' alt="sym" width="80%"></div></div>
<div class='paper-box-text' markdown="1">
**A Multi-Perceptual Learning Network for Retina OCT Image Denoising and Classification**
  
**Zhe Xiao**, Zongqi He, Zhuoning Xu, Wenjing Jia, Kin-Man Lam et al.

**APSIPA 2024** <span style="color:red">**(Oral)**</span>

[\[paper\]](https://ieeexplore.ieee.org/document/10848686)
</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">IWAIT 2025</div><img src='images/iwait2025.png' alt="sym" width="80%"></div></div>
<div class='paper-box-text' markdown="1">
**MFGAN: OCT Image Super‑resolution and Enhancement with Blind Degradation and Multi‑frame Fusion**

Zongqi He, **Zhe Xiao**, Wenjing Jia, Kin‑Man Lam et al.

**IWAIT 2025** <span style="color:red">**(Best Paper Award)**</span>

[\[paper\]](https://www.spiedigitallibrary.org/conference-proceedings-of-spie/13510/1351005/MFGAN--OCT-image-super-resolution-and-enhancement-with-blind/10.1117/12.3057230.short?webSyncID=6c60a397-8a3b-1bd9-3761-10bda6d2d646&sessionGUID=366cc9a6-5379-ee29-40a0-45b97a32d400)
</div>
</div>




<div class='paper-box'><div class='paper-box-image'><div><div class="badge">AIM@ECCV 2024</div><img src='images/AIM2024_video.png' alt="sym" width="80%"></div></div>
<div class='paper-box-text' markdown="1">
**AIM 2024 Challenge on Efficient Video Super-Resolution for AV1 Compressed Content**
  
Marcos V Conde, Zhijun Lei, Wen Li, Christos Bampis, Ioannis Katsavounidis, Radu Timofte, **Zhe Xiao** et al.

**ECCV AIM Workshop 2024**

[\[paper\]](https://arxiv.org/abs/2409.17256)

</div>
</div>



<div class='paper-box'><div class='paper-box-image'><div><div class="badge">AIM@ECCV 2024</div><img src='images/AIM2024_3D.png' alt="sym" width="80%"></div></div>
<div class='paper-box-text' markdown="1">
**AIM 2024 Sparse Neural Rendering Challenge: Methods and Results**

Michal Nazarczuk, Sibi Catley‑Chandar, Thomas Tanay, Richard Shaw, Eduardo Pérez‑Pellitero, Radu Timofte, **Zhe Xiao** et al.

**ECCV AIM Workshop 2024**

[\[paper\]](https://arxiv.org/abs/2409.15045)
</div>
</div>



# 🎖 Honors and Awards
- *2025.01*: **Best Paper Award** at IWAIT 2025

- *2024.12*: **The Hong Kong Polytechnic University Scholarship** 
  *(Around 20 awardees university wise for outstanding achievements)*
- *2024.08*: **2nd** place in ECCV AIM Workshop 2024 on Efficient Video Super-Resolution for AV1 Compressed Content
- *2024.08*: **3rd** place in ECCV AIM Workshop 2024 on Sparse Neural Rendering for Track 1 and Track 2
- *2024.10*: Dean’s Honours List
- *2024.04*: HKSAR Government Scholarship Fund - Talent Development Scholarship
- *2024.04*: HKSAR Government Scholarship Fund - Reaching Out Award
- *2024.09*: Undergraduate Research and Innovation Scheme Scholarship
- *2024.06*: Dunn Wing Tim Memorial Hall Scholarship *(the only awardee from the department for academic performance in the academic year)*
- *2023.12*: **3rd** place in Huawei ICT Competition Hong Kong SAR 2023-2024 Final [Computing Track]
- *2023.10*: Dean’s Honours List
- *2023.10*: Best GPA Award, Best Semester GPA Award, presented by Department of Electronic and Information Engineering



# 📖 Educations
- *2021.08 - present*, Electronic and Information Engineering, The Hong Kong Polytechnic University



# 📷 Portfolio

<!-- [![Portfolio Entry](images/Portfolio.jpg)](https://zachary-zhexiao.github.io/_pages/photowall/photowall.html) -->

<div align="center">
<a href="https://zachary-zhexiao.github.io/_pages/photowall/photowall.html">
  <img src="images/Portfolio.jpg" alt="Portfolio Entry" width="25%">
</a>
</div>
<!-- 🖼️ -->


<!-- 
# 💻 Experience
- *2024.07 - 2024.08*, Engineering Summer Programme, Girton College, University of Cambridge
- *2023.09 – 2024.09*, Undergraduate Research and Innovation Scheme (URIS)
# 💬 Invited Talks
- *2021.06*, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet. 
- *2021.03*, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet.  \| [\[video\]](https://github.com/)
# 💻 Internships
- *2019.05 - 2020.02*, [Lorem](https://github.com/), China.
-->

<!-- 

-->
