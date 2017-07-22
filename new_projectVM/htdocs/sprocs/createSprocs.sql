-- must have created the tables in the database first before creating the 
-- sprocs here

-- drop procedure get_all_enrollments;

USE school;

delimiter //
create procedure get_all_enrollments()
begin

select e.studentId, s.firstname, s.lastname, s.email, c.courseNum 
from enrollments e
join students s on s.studentId = e.studentId
join courses c on c.courseId = e.courseId
order by  e.CUDDate  ;

end //
delimiter ;
-- e.g. 
-- CALL get_all_enrollments();

-----------------------------------------------------------
-- drop procedure get_courses;

delimiter //
create procedure get_courses()
begin

select courseNum 
from courses 
order by  courseNum  ;

end //
delimiter ;
-- e.g. 
-- CALL get_courses();


-----------------------------------------------------------
 
-- drop procedure create_enrollment;

delimiter //
create procedure create_enrollment( IN in_firstname varchar(100), IN in_lastname varchar(100), IN in_email varchar(100), IN in_courseNum varchar(100))
begin

declare v_studentId int;
declare v_courseId int;
declare v_firstname varchar(100) ;
declare v_lastname varchar(100) ;
declare v_email varchar(100);
declare v_courseNum varchar(100);

select studentId 
into v_studentId 
from students s 
where s.firstname = in_firstname and s.lastname = in_lastname and s.email = in_email 
limit 1;

-- Add new record, but prevent inserting duplicate record:
if (v_studentId is null) then
	insert into students (firstname, lastname, email, CUDAction) 
		values (in_firstname, in_lastname, in_email, 1);
	set v_studentId = LAST_INSERT_ID();
end if ;

select courseId 
into v_courseId 
from courses c 
where c.courseNum = in_courseNum;

-- Add new record, but prevent inserting duplicate record:
INSERT INTO enrollments (studentId, courseId, CUDAction) 
SELECT v_studentId, v_courseId,  1 
FROM (SELECT v_studentId, v_courseId) AS tmp
WHERE NOT EXISTS (
    SELECT e.studentId, e.courseId 
    FROM enrollments e
    WHERE e.studentId = v_studentId and e.courseId = v_courseId
) LIMIT 1;
 
end //

delimiter ;

-- e.g.:
-- CALL create_enrollment ('Mickey', 'Mouse', 'mm@uab.edu', 'CS421');
-- CALL create_enrollment ('Mickey', 'Mouse', 'mm@uab.edu', 'CS621');
