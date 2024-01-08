.PHONY: build-development
build-development: ## Build the development docker image.
	docker compose -f docker/development/docker-compose.yml build

.PHONY: start-development
start-development: ## Start the development docker container.
	docker compose -f docker/development/docker-compose.yml up -d

.PHONY: stop-development
stop-development: ## Stop the development docker container.
	docker compose -f docker/development/docker-compose.yml down

.PHONY: build-demo
build-demo: ## Build the demo docker image.
	docker compose -f docker/demo/docker-compose.yml build

.PHONY: start-demo
start-demo: ## Start the demo docker container.
	docker compose -f docker/demo/docker-compose.yml up -d

.PHONY: stop-demo
stop-demo: ## Stop the demo docker container.
	docker compose -f docker/demo/docker-compose.yml down
  
.PHONY: build-production
build-production: ## Build the production docker image.
	docker compose -f docker/production/docker-compose.yml build

.PHONY: start-production
start-production: ## Start the production docker container.
	docker compose -f docker/production/docker-compose.yml up -d

.PHONY: stop-production
stop-production: ## Stop the production docker container.
	docker compose -f docker/production/docker-compose.yml down
