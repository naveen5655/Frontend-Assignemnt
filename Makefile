.PHONY: build

IMAGE_NAME = img1
TAG = dev

.PHONY: build

build:
    docker build -t $(IMAGE_NAME):$(TAG) .
