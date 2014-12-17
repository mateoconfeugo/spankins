-- name: job-run
-- A particular job run
SELECT j.name, r.result
FROM job j
LEFT OUTER JOIN  job_run jr ON jr.job_id = j.id
LEFT OUTER JOIN  run r ON r.id = jr.run_id
WHERE f.filing_date > :begin_date AND f.filing_date < :end_date
AND j.id = :job-name

-- name: summary
-- Summary of the running of the jobs
SELECT j.name, r.result
FROM job j
LEFT OUTER JOIN  job_run jr ON jr.job_id = j.id
LEFT OUTER JOIN  run r ON r.id = jr.run_id
WHERE f.filing_date > :begin_date AND f.filing_date < :end_date
GROUP BY j.name

-- select-run-results
SELECT * FROM build WHERE run_id = :run-id

-- select-run-errors
SELECT  jl.job_id, j.run_id, j.fid, j.runtime, j.begin_date, j.end_date, jl.type, j.status, j.run_count, jl.description
FROM job j, job_log jl
WHERE j.job_id = jl.job_id and run_id = :run-id

-- insert_job_log
INSERT INTO job_log (job_id, run_id  type, runtime, description, object)
VALUES (:job-id, :run-id, :type, :runtime, :description, :object)

-- insert-job
INSERT INTO job (job_id, run_id, runtime, begin_date, end_date,status)
VALUES(:job-id, :run-id, :runtime, :description, :object)

-- get-run-id
SELECT distinct(run_id)
FROM job
WHERE job_id = :job-id

-- update-job
UPDATE job
SET :attribute-name = :attribute-value
WHERE job_id = :job-id

-- increment_runcount
UPDATE job
SET run_count = (run_count +1)
WHERE job_id = :job-id

-- get-run
SELECT  run_id, runtime, user
FROM run
WHERE  run_id = :run-id

-- create-run
INSERT INTO run(run_id, runtime, user)
VALUES(0, NOW(), :user)

-- get-failed-jobs
SELECT j.job_id, r.run_id, j.begin_date, j.end_date, j.status, j.runcount, r.user
FROM run r, job j
WHERE r.run_id = j.run_id
AND status = 'failed'

-- get-successful-jobs
SELECT j.job_id, r.run_id, j.begin_date, j.end_date, j.status, j.runcount, r.user
FROM run r, job j
WHERE r.run_id = j.run_id
AND status = 'done'

-- get-pending-jobs
SELECT j.job_id, r.run_id, j.begin_date, j.end_date, j.status, j.runcount, r.user
FROM run r, job j
WHERE r.run_id = j.run_id
AND status = 'pending'

-- run-results-summary
SELECT j.job_id, j.run_id, j.run_count, j.runtime, j.begin_date, j.end_date, j.status, r.user
FROM job j, run r
WHERE j.run_id = :run-id

-- generate-error-summary
SELECT jl.job_id, j.run_id, j.runtime, j.begin_date, j.end_date, jl.type, j.status, j.run_count jl.description
FROM job j, job_log jl
WHERE j.id = jl.job_id
AND j.run_id = :run-id
AND j.status IN ('pending', 'failed')
GROUP BY 1
