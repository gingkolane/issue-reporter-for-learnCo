# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_09_24_181411) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "repos", id: :bigint, default: nil, force: :cascade do |t|
    t.bigint "github_repo_id"
    t.string "name"
    t.integer "forks_count"
    t.integer "open_issues_count"
    t.integer "percent_completion"
    t.string "reason_a"
    t.string "reason_b"
    t.string "reason_c"
    t.string "reason_d"
    t.string "master_repo"
    t.string "cohort_name"
  end

  create_table "repos_users", force: :cascade do |t|
    t.bigint "repo_id"
    t.bigint "user_id"
    t.string "repo_name", limit: 255
    t.string "github_username", limit: 255
    t.string "user_cohort_name", limit: 255
  end

  create_table "surveys", force: :cascade do |t|
    t.integer "repos_user_id"
    t.string "completion_status"
    t.string "incompleteReason"
    t.string "issueType"
    t.string "problemAnalysis"
    t.string "suggestedFix"
    t.string "github_username", limit: 255
    t.string "master_repo", limit: 255
    t.string "cohort_name", limit: 255
    t.string "repo_name", limit: 255
  end

  create_table "users", force: :cascade do |t|
    t.string "github_username"
    t.string "username"
    t.string "password_digest"
    t.string "cohort_name"
    t.string "role"
    t.integer "karma"
    t.string "avatar_url"
  end

end
