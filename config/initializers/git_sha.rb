# Define a method to fetch the git commit hash
def fetch_git_sha
  sha = `git rev-parse HEAD`
  if sha.present?
    sha.strip
  elsif File.exist?('.git-sha')
    File.read('.git-sha').strip
  else
    'unknown'
  end
end

GIT_HASH = fetch_git_sha
