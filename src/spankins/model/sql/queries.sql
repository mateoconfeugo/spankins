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
