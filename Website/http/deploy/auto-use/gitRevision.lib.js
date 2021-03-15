function gitRevision(length) {
	var options = {stdio: 'pipe', encoding: 'utf-8'};
	var result = child_process.spawnSync('git', ['rev-parse', 'HEAD'], options);
	return '\'' + result.stdout.trim().substr(0, length) + '\'';
}
