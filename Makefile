# テスト用データベースの起動
test-up:
	docker-compose -f docker-compose.test.yml up -d --build

# テスト用データベースの停止
test-down:
	docker-compose -f docker-compose.test.yml down

# テストの実行
test:
	make test-up
	# ここにテストを実行するコマンドを追加
	make test-down
