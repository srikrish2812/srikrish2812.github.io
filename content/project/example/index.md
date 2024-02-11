---
title: Deep Learning Model for Satellite Image Classification
summary: A CNN network to classify satellite images
tags:
  - Deep Learning
date: '2016-04-27T00:00:00Z'

# Optional external URL for project (replaces project detail page).
external_link: ''

image:
  caption: Photo by rawpixel on Unsplash
  focal_point: Smart

links:
  - icon: x
    icon_pack: fab
    name: Follow
    url: ''
url_code: 'https://github.com/srikrish2812/satellite_image_classification_cv'
url_pdf: ''
url_slides: ''
url_video: ''

# Slides (optional).
#   Associate this project with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides = "example-slides"` references `content/slides/example-slides.md`.
#   Otherwise, set `slides = ""`.
slides: ''
---

1. In this project, we developed and trained two deep-learning models on a satellite image dataset from Kaggle.
2. The first model is a regular CNN-based model with 17 layers and uses a cross-entropy loss function to learn the weights/kernels. (RegNet17 model)
3. The second model is based on the residual architecture added to conventional CNNs. This model has 17 layers and uses a cross-entropy loss function for learning the weights/kernels. (ResNet17 model)
4. Finally, both models were compared for speed and accuracy.
5. Although RegNet17 is more accurate, ResNet17 has low inference time, which is vital for real-time object classification.
